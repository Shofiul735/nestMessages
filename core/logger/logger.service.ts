// logger.service.ts
import { Injectable } from '@nestjs/common';
import { createLogger, format, transports, Logger } from 'winston';

@Injectable()
export class CustomLogger {
  private logger: Logger;

  constructor() {
    this.logger = createLogger({
      level: 'error',
      format: format.combine(
        format.timestamp(),
        format.printf(({ timestamp, level, message }) => {
          return `${timestamp} [${level}]: ${message}`;
        }),
      ),
      transports: [
        new transports.File({ filename: 'error.log', level: 'error' }), // Log errors to a file
        new transports.Console(), // Log to console
      ],
    });
  }

  log(message: string) {
    this.logger.info(message);
  }

  error(message: string) {
    this.logger.error(message);
  }

  warn(message: string) {
    this.logger.warn(message);
  }
}
