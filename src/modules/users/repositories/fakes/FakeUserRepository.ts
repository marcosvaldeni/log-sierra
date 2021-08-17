import { v4 as uuid } from 'uuid';

import IUserRepository from '../IUserRepository';

import User from '../../infra/typeorm/entities/User';
import ICreateUserDTO from '../../dtos/ICreateUserDTO';

class FakeUserRepository implements IUserRepository {
  private users: User[] = [];

  public async create(data: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, { id: uuid() }, data);

    this.users.push(user);

    return user;
  }

  public async read(id: string): Promise<User | undefined> {
    return this.findById(id);
  }

  public async update(user: User): Promise<User> {
    const findIndex = this.users.findIndex(findUser => findUser.id === user.id);

    this.users[findIndex] = user;

    return user;
  }

  public async delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  public async findById(id: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.id === id);

    return findUser;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.email === email);

    return findUser;
  }
}

export default FakeUserRepository;
