import { v4 as uuid } from 'uuid';

import ILogRepository from '../ILogRepository';
import ICreateLogDTO from '../../dtos/ICreateLogDTO';

import Log from '../../infra/typeorm/entities/Log';

class FakeLogRepository implements ILogRepository {
  private logs: Log[] = [];

  public async create({ user_id, type }: ICreateLogDTO): Promise<Log> {
    const newLog = new Log();

    Object.assign(newLog, {
      id: uuid(),
      type,
      user_id,
      created_at: new Date(),
    });

    this.logs.push(newLog);

    return newLog;
  }

  public async listLogs(user_id: string): Promise<Log[]> {
    const logs = this.logs.filter(log => log.user_id === user_id);

    return logs;
  }

  public async deleteAll(user_id: string): Promise<void> {
    const newLogs = this.logs.filter(log => log.user_id !== user_id);

    this.logs = newLogs;
  }
}

export default FakeLogRepository;
