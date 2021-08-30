import { getRepository, Repository } from 'typeorm';
import ILogRepository from '../../../repositories/ILogRepository';
import Log from '../entities/Log';
import ICreateLogDTO from '../../../dtos/ICreateLogDTO';

class LogRepository implements ILogRepository {
  private ormRepository: Repository<Log>;

  constructor() {
    this.ormRepository = getRepository(Log);
  }

  public async create({ user_id, type }: ICreateLogDTO): Promise<Log> {
    const log = this.ormRepository.create({
      user_id,
      type,
    });

    await this.ormRepository.save(log);

    return log;
  }

  public async listLogs(user_id: string): Promise<Log[]> {
    const logs = await this.ormRepository.find({
      where: { user_id },
    });

    return logs;
  }

  public async deleteAll(user_id: string): Promise<void> {
    await this.ormRepository.delete({ user_id });
  }
}

export default LogRepository;
