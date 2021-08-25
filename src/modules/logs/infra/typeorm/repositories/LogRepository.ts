import { getRepository, Repository } from 'typeorm';
import ILogRepository from '../../../repositories/ILogRepository';
import Log from '../entities/Log';

class LogRepository implements ILogRepository {
  private ormRepository: Repository<Log>;

  constructor() {
    this.ormRepository = getRepository(Log);
  }

  public async listLog(id: string): Promise<Log[]> {
    throw new Error('Method not implemented.');
  }

  public async logIn(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public async logOut(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export default LogRepository;
