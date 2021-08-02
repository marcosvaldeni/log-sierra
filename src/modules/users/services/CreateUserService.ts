import { getCustomRepository } from 'typeorm';
// import { injectable, inject } from 'tsyringe';

import User from '../infra/typeorm/entities/User';
// import IUsersRepository from '../repositories/IUsersRepository';

import UsersRepository from '../infra/typeorm/repositories/UserRepository';

interface Request {
  name: string,
  email: string,
  password: string,
}

class CreateUserService {
  // constructor(private usersRepository: IUsersRepository) {}

  public async execute({ name, email, password }: Request): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.create({
      name,
      email,
      password
    });

    await usersRepository.save(user); 

    // const user = {
    //   name,
    //   email,
    //   password
    // };  

    return user;
  }
}

export default CreateUserService;
