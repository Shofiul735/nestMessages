import { Module } from '@nestjs/common';

import { IDataService } from './interfaces/dataservice.interface';
import { SqlDataService } from './implementations/sql-dataservice';

@Module({
  providers: [
    {
      provide: IDataService,
      useClass: SqlDataService,
    },
  ],
  exports: [IDataService],
})
export class SqlDataServiceModule {}
