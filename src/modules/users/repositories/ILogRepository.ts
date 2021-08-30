import Log from '../infra/typeorm/entities/Log';
import ICreateLogDTO from '../dtos/ICreateLogDTO';

export default interface IUserRepository {
  create(data: ICreateLogDTO): Promise<Log>;
  listLogs(user_id: string): Promise<Log[]>;
  deleteAll(user_id: string): Promise<void>;
}
