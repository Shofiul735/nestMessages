import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpStatus,
  InternalServerErrorException,
  NotFoundException,
  Post,
  Res,
  UseFilters,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-messsage.dto';
import { CustomLogger } from 'src/core/logger/logger.service';
import { Response } from 'express';

@Controller('/messages')
export class MessagesController {
  constructor(private readonly logger: CustomLogger) {}
  @Get()
  listMessages() {
    throw new InternalServerErrorException('You fucked up!');
  }
  @Post()
  createMessage(@Body() body: CreateMessageDto, @Res() res: Response) {
    try {
      throw new BadRequestException();
    } catch (ex) {
      throw ex;
    }
  }
  @Get('/:id')
  getMessage() {
    return 'Message';
  }
}
