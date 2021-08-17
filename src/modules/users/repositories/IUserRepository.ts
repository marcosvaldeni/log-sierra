import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../infra/typeorm/entities/User';

export default interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>;
  update(user: User): Promise<User>;
  read(id: string): Promise<User | undefined>;
  delete(id: string): Promise<boolean>;
  findByEmail(email: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
}
