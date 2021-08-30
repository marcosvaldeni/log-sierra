import { injectable, inject } from 'tsyringe';

import Log from '../infra/typeorm/entities/Log';
import ILogRepository from '../repositories/ILogRepository';
import ICreateLogDTO from '../dtos/ICreateLogDTO';

@injectable()
class CreateLogService {
  constructor(
    @inject('LogRepository')
    private logRepository: ILogRepository,
  ) {}

  public async execute({ user_id, type }: ICreateLogDTO): Promise<Log> {
    const log = await this.logRepository.create({ user_id, type });

    return log;
  }
}

export default CreateLogService;
