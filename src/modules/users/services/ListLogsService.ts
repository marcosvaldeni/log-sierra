import { injectable, inject } from 'tsyringe';

import Log from '../infra/typeorm/entities/Log';
import ILogRepository from '../repositories/ILogRepository';

@injectable()
class ListLogsService {
  constructor(
    @inject('LogRepository')
    private logRepository: ILogRepository,
  ) {}

  public async execute(user_id: string): Promise<Log[]> {
    const logs = await this.logRepository.listLogs(user_id);

    return logs;
  }
}

export default ListLogsService;
