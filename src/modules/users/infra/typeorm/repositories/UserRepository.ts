import { getRepository, Repository } from 'typeorm';
import ICreateUserDTO from "../../../dtos/ICreateUserDTO";
import IUserRepository from "../../../repositories/IUsersRepository";
import User from '../entities/User';

class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    const user = await this.ormRepository.create(data);

    await this.ormRepository.save(user);

    return user;
  }

  public async findAll(): Promise<User[] | undefined> {
    throw new Error("Method not implemented.");
  }
  public async findByEmail(email: string): Promise<User | undefined> {
    throw new Error("Method not implemented.");
  }
  public async update(data: ICreateUserDTO): Promise<User> {
    throw new Error("Method not implemented.");
  }
  public async delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  
}

export default UserRepository;
