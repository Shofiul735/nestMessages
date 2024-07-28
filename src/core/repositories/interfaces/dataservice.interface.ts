import { IGenericRepository } from './repositories.interface';
import { Author, Book, Genre } from 'src/core/Models/author.dbmodel';

export const IDataService = Symbol('IDataService');

export interface IDataService {
  authors: IGenericRepository<Author>;
  books: IGenericRepository<Book>;
  genres: IGenericRepository<Genre>;
}
