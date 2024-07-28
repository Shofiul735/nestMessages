import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';
import { ValidationPipe } from '@nestjs/common';
import { CustomLogger } from 'core/logger/logger.service';
import { HttpExceptionFilter } from 'core/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);

  const customLogger = app.get(CustomLogger);

  app.useGlobalFilters(new HttpExceptionFilter(customLogger));
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
