import { container } from 'tsyringe';

import IUserRepository from '../../modules/users/repositories/IUsersRepository';
import UserRepository from '../../modules/users/infra/typeorm/repositories/UserRepository';

container.registerSingleton<IUserRepository>(
  'UserRepository',
  UserRepository
);
