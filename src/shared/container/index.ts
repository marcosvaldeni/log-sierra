import { container } from 'tsyringe';

import '../../modules/users/providers/HashProvider';
import './providers';

import IUserRepository from '../../modules/users/repositories/IUserRepository';
import UserRepository from '../../modules/users/infra/typeorm/repositories/UserRepository';
import IUserTokenRepository from '../../modules/users/repositories/IUserTokenRepository';
import UserTokenRepository from '../../modules/users/infra/typeorm/repositories/UserTokenRepository';
import ILogRepository from '../../modules/logs/repositories/ILogRepository';
import LogRepository from '../../modules/logs/infra/typeorm/repositories/LogRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

container.registerSingleton<IUserTokenRepository>(
  'UserTokenRepository',
  UserTokenRepository,
);

container.registerSingleton<ILogRepository>('LogRepository', LogRepository);
