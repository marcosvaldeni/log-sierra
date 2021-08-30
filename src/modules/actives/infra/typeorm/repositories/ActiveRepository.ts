import { getRepository, Repository } from 'typeorm';
import IActiveRepository from '../../../repositories/IActiveRepository';
import Active from '../entities/Active';

class ActiveRepository implements IActiveRepository {
  private ormRepository: Repository<Active>;

  constructor() {
    this.ormRepository = getRepository(Active);
  }

  public async activeOn(user_id: string): Promise<Active> {
    const active = await this.ormRepository.create({
      activeOn: new Date(),
      activeOff: null,
      user_id,
    });

    await this.ormRepository.save(active);

    return active;
  }

  public async activeOff(user_id: string): Promise<Active> {
    const active = await this.ormRepository.findOne({
      where: { user_id, activeOff: null },
    });

    if (!active) {
      throw new Error('404 not find');
    }

    active.activeOff = new Date();

    await this.ormRepository.save(active);

    return active;
  }

  public async listActives(user_id: string): Promise<Active[]> {
    const actives = await this.ormRepository.find({
      where: { user_id },
    });

    return actives;
  }

  public async checkActive(user_id: string): Promise<boolean> {
    const actives = await this.ormRepository.find({
      where: { user_id, activeOff: null },
    });

    if (actives.length) {
      return true;
    }

    return false;
  }

  public async deleteAllActives(user_id: string): Promise<void> {
    await this.ormRepository.delete({
      user_id,
    });
  }
}

export default ActiveRepository;
