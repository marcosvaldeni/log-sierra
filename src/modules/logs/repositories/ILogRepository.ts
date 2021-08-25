import Log from '../infra/typeorm/entities/Log';

export default interface IUserRepository {
  logIn(id: string): Promise<Log>;
  logOut(id: string): Promise<Log>;
  listLog(id: string): Promise<Log[]>;
}
