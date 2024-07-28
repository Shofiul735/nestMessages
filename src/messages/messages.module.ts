import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { CustomLogger } from 'src/core/logger/logger.service';
import { DataServiceModule } from 'src/core/repositories/dataservice.module';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, CustomLogger],
  imports: [DataServiceModule]
})
export class MessagesModule {}
