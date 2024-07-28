import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { CustomLogger } from 'src/core/logger/logger.service';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, CustomLogger],
})
export class MessagesModule {}
