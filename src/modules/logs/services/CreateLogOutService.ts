import { injectable, inject } from 'tsyringe';

import ILogRepository from '../repositories/ILogRepository';

import Log from '../infra/typeorm/entities/Log';

@injectable()
class CreateLogOutService {
  constructor(
    @inject('LogRepository')
    private logRepository: ILogRepository,
  ) {}

  public async execute(user_id: string): Promise<Log> {
    const log = await this.logRepository.logOut(user_id);

    return log;
  }
}

export default CreateLogOutService;
