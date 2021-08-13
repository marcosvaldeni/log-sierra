import { container } from 'tsyringe';

import '../../modules/users/providers/HashProvider';

import IUserRepository from '../../modules/users/repositories/IUserRepository';
import UserRepository from '../../modules/users/infra/typeorm/repositories/UserRepository';

container.registerSingleton<IUserRepository>(
  'UserRepository',
  UserRepository
);
