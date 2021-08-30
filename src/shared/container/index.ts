import { container } from 'tsyringe';

import '../../modules/users/providers/HashProvider';
import './providers';

import IUserRepository from '../../modules/users/repositories/IUserRepository';
import UserRepository from '../../modules/users/infra/typeorm/repositories/UserRepository';
import IUserTokenRepository from '../../modules/users/repositories/IUserTokenRepository';
import UserTokenRepository from '../../modules/users/infra/typeorm/repositories/UserTokenRepository';
import IActiveRepository from '../../modules/actives/repositories/IActiveRepository';
import ActiveRepository from '../../modules/actives/infra/typeorm/repositories/ActiveRepository';
import ILogRepository from '../../modules/users/repositories/ILogRepository';
import LogRepository from '../../modules/users/infra/typeorm/repositories/LogRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

container.registerSingleton<IUserTokenRepository>(
  'UserTokenRepository',
  UserTokenRepository,
);

container.registerSingleton<IActiveRepository>(
  'ActiveRepository',
  ActiveRepository,
);

container.registerSingleton<ILogRepository>('LogRepository', LogRepository);
