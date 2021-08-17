import { getRepository, Repository } from 'typeorm';
import ICreateUserDTO from '../../../dtos/ICreateUserDTO';
import IUserRepository from '../../../repositories/IUserRepository';
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

  public async read(id: string): Promise<User | undefined> {
    return this.findById(id);
  }

  public async update(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }

  public async delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id);

    return user;
  }

  public async findAll(): Promise<User[] | undefined> {
    return await this.ormRepository.find();
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email },
    });

    return user;
  }
}

export default UserRepository;
