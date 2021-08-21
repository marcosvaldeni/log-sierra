import { container } from 'tsyringe';

import '../../modules/users/providers/HashProvider';
import './providers';

import IUserRepository from '../../modules/users/repositories/IUserRepository';
import UserRepository from '../../modules/users/infra/typeorm/repositories/UserRepository';
import IUserTokenRepository from '../../modules/users/repositories/IUserTokenRepository';
import UserTokenRepository from '../../modules/users/infra/typeorm/repositories/UserTokenRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

container.registerSingleton<IUserTokenRepository>(
  'UserTokenRepository',
  UserTokenRepository,
);
