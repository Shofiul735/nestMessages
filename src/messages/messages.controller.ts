import { Controller, Get, Post } from '@nestjs/common';

@Controller('/messages')
export class MessagesController {
  @Get()
  listMessages() {
    return [];
  }
  @Post()
  createMessage(message: string) {
    return '';
  }
  @Get('/:id')
  getMessage() {
    return 'Message';
  }
}
