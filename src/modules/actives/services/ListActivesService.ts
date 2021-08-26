import { injectable, inject } from 'tsyringe';

import IActiveRepository from '../repositories/IActiveRepository';

import Active from '../infra/typeorm/entities/Active';

@injectable()
class ListActivesService {
  constructor(
    @inject('ActiveRepository')
    private activeRepository: IActiveRepository,
  ) {}

  public async execute(user_id: string): Promise<Active[]> {
    const actives = await this.activeRepository.listActives(user_id);

    return actives;
  }
}

export default ListActivesService;
