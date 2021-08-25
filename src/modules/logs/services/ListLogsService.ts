import { injectable, inject } from 'tsyringe';

import ILogRepository from '../repositories/ILogRepository';

import Log from '../infra/typeorm/entities/Log';

@injectable()
class UpdateProfileService {
  constructor(
    @inject('LogRepository')
    private logRepository: ILogRepository,
  ) {}

  public async execute(user_id: string): Promise<Log[]> {
    const logs = await this.logRepository.listLog(user_id);

    return logs;
  }
}

export default UpdateProfileService;
