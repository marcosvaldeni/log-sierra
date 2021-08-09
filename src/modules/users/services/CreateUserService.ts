import { injectable, inject } from 'tsyringe';

import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

interface Request {
  name: string,
  email: string,
  password: string,
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUsersRepository
  ) {}

  public async execute({ name, email, password }: Request): Promise<User> {

    const user = await this.usersRepository.create({
      name,
      email,
      password
    });

    // const user = {
    //   name: 'marcos',
    //   email: 'marcos@email.com',
    //   password: 'fdslkfjl'
    // } as User;  

    return user;
  }
}

export default CreateUserService;
