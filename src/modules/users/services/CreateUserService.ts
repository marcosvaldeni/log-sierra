import AppError from '../../../shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

import User from '../infra/typeorm/entities/User';
import IUserRepository from '../repositories/IUserRepository';

interface Request {
  name: string,
  email: string,
  password: string,
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUserRepository
  ) {}

  public async execute({ name, email, password }: Request): Promise<User> {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('Email address already used.');
    }

    const user = await this.usersRepository.create({
      name,
      email,
      password
    });  

    return user;
  }
}

export default CreateUserService;
