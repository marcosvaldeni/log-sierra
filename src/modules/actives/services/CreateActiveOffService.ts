import { injectable, inject } from 'tsyringe';

import AppError from '../../../shared/errors/AppError';
import IActiveRepository from '../repositories/IActiveRepository';

import Active from '../infra/typeorm/entities/Active';

@injectable()
class CreateActiveOffService {
  constructor(
    @inject('ActiveRepository')
    private activeRepository: IActiveRepository,
  ) {}

  public async execute(user_id: string): Promise<Active> {
    const checkActive = await this.activeRepository.checkActive(user_id);

    if (!checkActive) {
      throw new AppError('There is no Active On!');
    }

    const active = await this.activeRepository.activeOff(user_id);

    return active;
  }
}

export default CreateActiveOffService;
