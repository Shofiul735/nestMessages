import { OnApplicationBootstrap } from '@nestjs/common';
import { IDataService } from '../interfaces/dataservice.interface';
import { Author, Book, Genre } from 'src/core/Models/author.dbmodel';
import { IGenericRepository } from '../interfaces/repositories.interface';
import { SqlGenericRepository } from './sql-generic-repository';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class SqlDataService implements IDataService, OnApplicationBootstrap {
  authors: IGenericRepository<Author>;
  books: IGenericRepository<Book>;
  genres: IGenericRepository<Genre>;

  constructor(
    @InjectModel(Author.name)
    private AuthorRepository: Model<Author>,
    @InjectModel(Book.name)
    private BookRepository: Model<Book>,
    @InjectModel(Genre.name)
    private GenreRepository: Model<Genre>,
  ) {}

  onApplicationBootstrap() {
    this.authors = new SqlGenericRepository<Author>(this.AuthorRepository);
    this.books = new SqlGenericRepository<Book>(this.BookRepository);
    this.genres = new SqlGenericRepository<Genre>(this.GenreRepository);
  }
}
