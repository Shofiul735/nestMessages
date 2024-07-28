import { Module } from '@nestjs/common';
import { SqlDataServiceModule } from './sql-dataservice.module';

@Module({
  imports: [SqlDataServiceModule],
  exports: [SqlDataServiceModule],
})
export class DataServiceModule {}
