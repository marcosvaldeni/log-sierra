import { v4 as uuid } from 'uuid';

import IActiveRepository from '../IActiveRepository';

import Active from '../../infra/typeorm/entities/Active';

class FakeActiveRepository implements IActiveRepository {
  private userActives: Active[] = [];

  public async activeOn(user_id: string): Promise<Active> {
    const newActive = new Active();

    Object.assign(newActive, {
      id: uuid(),
      activeOn: new Date(),
      activeOff: null,
      user_id,
    });

    this.userActives.push(newActive);

    return newActive;
  }

  public async activeOff(user_id: string): Promise<Active> {
    const active = this.userActives.find(
      userActive =>
        userActive.user_id === user_id && userActive.activeOff === null,
    );

    if (active) {
      active.activeOff = new Date();

      return active;
    }

    return {} as Active;
  }

  public async listActives(user_id: string): Promise<Active[]> {
    const actives = await this.userActives.filter(
      active => active.user_id === user_id,
    );

    return actives;
  }

  public async checkActive(user_id: string): Promise<boolean> {
    const active = this.userActives.find(
      userActive =>
        userActive.user_id === user_id && userActive.activeOff === null,
    );

    if (active) {
      return true;
    }

    return false;
  }
}

export default FakeActiveRepository;
