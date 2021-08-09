import { v4 as uuid } from 'uuid';

import IUserRepository from '../IUserRepository';

import User from '../../infra/typeorm/entities/User';
import ICreateUserDTO from '../../dtos/ICreateUserDTO';

class UserRepository implements IUserRepository {
  private users: User[] = [];

  public async create(data: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, { id: uuid() }, data);   

    this.users.push(user);

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.email === email);

    return findUser;
  }

  public async update(data: ICreateUserDTO): Promise<User> {
    throw new Error('Method not implemented.');
  }

  public async delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}

export default UserRepository;