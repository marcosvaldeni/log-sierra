import 'reflect-metadata';

import AppError from '../../../shared/errors/AppError';

import FakeUserRepository from '../repositories/fakes/FakeUserRepository';
import CreateUserService from './CreateUserService';

let fakeUserRepository: FakeUserRepository;
let createUserService: CreateUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUserRepository();

    createUserService = new CreateUserService(
      fakeUserRepository
    );
  });

  it('should be able to create a new user', async () => {
    const user = await createUserService.execute({
      name: 'John Lock',
      email: 'johnlock@email.com',
      password: '123456'
    });

    await expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with a existent email', async () => {
    await createUserService.execute({
      name: 'John Lock',
      email: 'johnlock@email.com',
      password: '123456'
    });

    await expect(
      createUserService.execute({
        name: 'John Lock',
        email: 'johnlock@email.com',
        password: '123456'
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
