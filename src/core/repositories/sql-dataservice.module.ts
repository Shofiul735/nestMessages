import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';

import { Author, Book, Genre } from '../Models/author.dbmodel';
import { IDataService } from './interfaces/dataservice.interface';
import { SqlDataService } from './implementations/sql-dataservice';
import { AuthorSchema, BookSchema, GenreSchema } from '../Models/schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Author.name, schema: AuthorSchema },
      { name: Book.name, schema: BookSchema },
      { name: Genre.name, schema: GenreSchema },
    ]),
    MongooseModule.forRoot(''),
  ],
  providers: [
    {
      provide: IDataService,
      useClass: SqlDataService,
    },
  ],
  exports: [IDataService],
})
export class SqlDataServiceModule {}
