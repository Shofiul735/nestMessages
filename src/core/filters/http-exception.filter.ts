import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CustomLogger } from '../logger/logger.service';
import { Reflector } from '@nestjs/core';

// Define an interface for the error message structure
interface ErrorResponse {
  message: string;
  error: string;
  path?: string; // Optional field for the request path
  stack?: string; // Optional field for the stack trace
}

@Catch()
@Injectable()
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(
    private readonly logger: CustomLogger,
    private readonly reflector: Reflector,
  ) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    // Define a default message object
    let message: ErrorResponse;

    // If the exception is an instance of HttpException, get the response data.
    if (exception instanceof HttpException) {
      const responseData = exception.getResponse();
      // Ensure responseData is an object
      message =
        typeof responseData === 'object'
          ? (responseData as ErrorResponse)
          : { message: String(responseData), error: 'Unknown Error' };
    } else {
      message = {
        message: 'Internal Server Error',
        error: 'Internal Server Error',
        path: request.url,
        stack: exception instanceof Error ? exception.stack : undefined,
      };
    }

    // Log the error message along with the request method and path
    this.logger.error(
      `Exception thrown: ${JSON.stringify(message)} - Method: ${request.method} - Path: ${request.url}`,
      exception instanceof Error ? exception.stack : '',
      'HttpExceptionFilter',
    );

    // Return the error response
    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      method: request.method,
      path: request.url,
      ...message,
    });
  }
}
