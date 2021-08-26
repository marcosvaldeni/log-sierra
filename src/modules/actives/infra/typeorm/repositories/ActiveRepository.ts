import { getRepository, Repository } from 'typeorm';
import IActiveRepository from '../../../repositories/IActiveRepository';
import Active from '../entities/Active';

class ActiveRepository implements IActiveRepository {
  private ormRepository: Repository<Active>;

  constructor() {
    this.ormRepository = getRepository(Active);
  }

  public async activeOn(user_id: string): Promise<Active> {
    throw new Error('Method not implemented.');
  }

  public async activeOff(user_id: string): Promise<Active> {
    throw new Error('Method not implemented.');
  }

  public async listActives(user_id: string): Promise<Active[]> {
    throw new Error('Method not implemented.');
  }
}

export default ActiveRepository;
