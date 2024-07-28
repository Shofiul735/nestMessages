import { IGenericRepository } from './repositories.interface';
import { Author, Book, Genre } from 'src/core/Models/author.dbmodel';

export abstract class IDataService {
  abstract authors: IGenericRepository<Author>;
  abstract books: IGenericRepository<Book>;
  abstract genres: IGenericRepository<Genre>;
}
