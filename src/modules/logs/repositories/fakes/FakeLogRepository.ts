import { v4 as uuid } from 'uuid';

import AppError from '../../../../shared/errors/AppError';
import ILogRepository from '../ILogRepository';

import Log from '../../infra/typeorm/entities/Log';

class FakeLogRepository implements ILogRepository {
  private userLogs: Log[] = [];

  public async logIn(user_id: string): Promise<Log> {
    const log = this.userLogs.find(
      userLog => userLog.user_id === user_id && userLog.logout === null,
    );

    if (log) {
      throw new AppError('Still an open login!');
    }

    const newLog = new Log();

    Object.assign(newLog, {
      id: uuid(),
      login: new Date(),
      logout: null,
      user_id,
    });

    this.userLogs.push(newLog);

    return newLog;
  }

  public async logOut(user_id: string): Promise<Log> {
    const log = this.userLogs.find(
      userLog => userLog.user_id === user_id && userLog.logout === null,
    );

    if (!log) {
      throw new AppError('There is no logout to be done!');
    }

    log.logout = new Date();

    return log;
  }

  public async listLog(user_id: string): Promise<Log[]> {
    const logs = await this.userLogs.filter(log => log.user_id === user_id);

    return logs;
  }
}

export default FakeLogRepository;
