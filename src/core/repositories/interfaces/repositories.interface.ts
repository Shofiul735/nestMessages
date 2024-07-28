export interface IGenericRepository<T> {
  getAll(): Promise<T[]>;
  getById(id: number | string): Promise<T>;
  create(item: T): Promise<T>;
  update(id: number | string, item: T): Promise<T>;
}
