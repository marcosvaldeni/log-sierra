import { injectable, inject } from 'tsyringe';

import IActiveRepository from '../repositories/IActiveRepository';

import Active from '../infra/typeorm/entities/Active';

@injectable()
class CreateActiveOffService {
  constructor(
    @inject('ActiveRepository')
    private activeRepository: IActiveRepository,
  ) {}

  public async execute(user_id: string): Promise<Active> {
    const active = await this.activeRepository.activeOff(user_id);

    return active;
  }
}

export default CreateActiveOffService;
