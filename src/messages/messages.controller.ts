import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  Post,
  Res,
  UseFilters,
  Inject,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-messsage.dto';
import { CustomLogger } from 'src/core/logger/logger.service';
import { Response } from 'express';
import { IDataService } from 'src/core/repositories/interfaces/dataservice.interface';

@Controller('/messages')
export class MessagesController {
  constructor(
    private readonly logger: CustomLogger,
    @Inject(IDataService) private readonly dataservice: IDataService,
  ) {}
  @Get()
  listMessages() {
    this.dataservice.authors.getAll();
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
