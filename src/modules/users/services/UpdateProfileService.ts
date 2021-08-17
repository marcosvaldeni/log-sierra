import { injectable, inject } from 'tsyringe';

import AppError from '../../../shared/errors/AppError';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import IUserRepository from '../repositories/IUserRepository';

import User from '../infra/typeorm/entities/User';

interface IRequest {
  user_id: string;
  name: string;
  email: string;
  old_password?: string;
  password?: string;
}

@injectable()
class UpdateProfileService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    user_id,
    name,
    email,
    password,
    old_password,
  }: IRequest): Promise<User> {
    const user = await this.userRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found');
    }

    const userWithUpdateEmail = await this.userRepository.findByEmail(email);

    if (userWithUpdateEmail && userWithUpdateEmail.id !== user.id) {
      throw new AppError('E-mail already in use.');
    }

    user.name = name;
    user.email = email;

    if (password && old_password) {
      const checkOldPassword = await this.hashProvider.compareHash(
        old_password,
        user.password,
      );

      if (!checkOldPassword) {
        throw new AppError('Old password does not match.');
      }

      user.password = await this.hashProvider.generateHash(password);
    }

    if (password && !old_password) {
      throw new AppError(
        'You need to inform the old password to set a new password.',
      );
    }

    return await this.userRepository.update(user);
  }
}

export default UpdateProfileService;
