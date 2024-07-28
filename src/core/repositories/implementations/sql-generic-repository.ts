import { Model } from 'mongoose';
import { IGenericRepository } from '../interfaces/repositories.interface';

// this is a dummy Repo
export class SqlGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Model<T>;
  //   private _populateOnFind: string[];

  constructor(repository: Model<T>) {
    this._repository = repository;
  }

  getAll(): Promise<T[]> {
    throw new Error('Method not implemented.');
  }
  getById(id: string | number): Promise<T> {
    throw new Error('Method not implemented.');
  }
  create(item: T): Promise<T> {
    throw new Error('Method not implemented.');
  }
  update(id: string | number, item: T): Promise<T> {
    throw new Error('Method not implemented.');
  }
}
