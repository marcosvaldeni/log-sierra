import { v4 as uuid } from 'uuid';

import AppError from '../../../../shared/errors/AppError';
import IActiveRepository from '../IActiveRepository';

import Active from '../../infra/typeorm/entities/Active';

class FakeActiveRepository implements IActiveRepository {
  private userActives: Active[] = [];

  public async activeOn(user_id: string): Promise<Active> {
    const active = this.userActives.find(
      userActive =>
        userActive.user_id === user_id && userActive.activeOff === null,
    );

    if (active) {
      throw new AppError('An Active still open!');
    }

    const newActive = new Active();

    Object.assign(newActive, {
      id: uuid(),
      Activein: new Date(),
      Activeout: null,
      user_id,
    });

    this.userActives.push(newActive);

    console.log(newActive);

    return newActive;
  }

  public async activeOff(user_id: string): Promise<Active> {
    const active = this.userActives.find(
      userActive =>
        userActive.user_id === user_id && userActive.activeOff === null,
    );

    if (!active) {
      throw new AppError('There is no Active off to be done!');
    }

    active.activeOff = new Date();

    return active;
  }

  public async listActives(user_id: string): Promise<Active[]> {
    const actives = await this.userActives.filter(
      active => active.user_id === user_id,
    );

    return actives;
  }
}

export default FakeActiveRepository;
