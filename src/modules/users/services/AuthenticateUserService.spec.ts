import 'reflect-metadata';

import AppError from '../../../shared/errors/AppError';

import FakeUserRepository from '../repositories/fakes/FakeUserRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import AuthenticateUser from './AuthenticateUserService';

let fakeUserRepository: FakeUserRepository;
let fakeHashProvider: FakeHashProvider;
let authenticateUser: AuthenticateUser;

describe('AuthenticateUser', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUserRepository();
    fakeHashProvider = new FakeHashProvider();

    authenticateUser = new AuthenticateUser(
      fakeUserRepository,
      fakeHashProvider
    );
  });

  it('should be able to authenticate', async () => {
    const user = await fakeUserRepository.create({
      name: 'John Lock',
      email: 'johnlock@email.com',
      password: '123456'
    });

    const response = await authenticateUser.execute({
      email: 'johnlock@email.com',
      password: '123456'
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  // it('should not be able to authenticate with none existing user', async () => {
  //   await expect(
  //     authenticateUser.execute({
  //       email: 'nonuser@email.com',
  //       password: 'nonpassword'
  //     })
  //   ).rejects.toBeInstanceOf(AppError);
  // });
});
