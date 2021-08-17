import 'reflect-metadata';

import AppError from '../../../shared/errors/AppError';

import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUserRepository from '../repositories/fakes/FakeUserRepository';
import UpdateProfile from './UpdateProfileService';

let fakeUserRepository: FakeUserRepository;
let updateProfile: UpdateProfile;
let fakeHashProvider: FakeHashProvider;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUserRepository();
    fakeHashProvider = new FakeHashProvider();

    updateProfile = new UpdateProfile(fakeUserRepository, fakeHashProvider);
  });

  it('should be able to update the profile', async () => {
    const user = await fakeUserRepository.create({
      name: 'John Locke',
      email: 'johnlocke@email.com',
      password: 'pass123456',
    });

    const updatedUser = await updateProfile.execute({
      user_id: user.id,
      name: 'John Shapperd',
      email: 'johnshapperd@email.com',
    });

    await expect(updatedUser.name).toBe('John Shapperd');
    await expect(updatedUser.email).toBe('johnshapperd@email.com');
  });

  it('should not be able to update the email to an existing email', async () => {
    await fakeUserRepository.create({
      name: 'John Locke',
      email: 'johnlocke@email.com',
      password: 'pass123456',
    });

    const user = await fakeUserRepository.create({
      name: 'Jack Shapperd',
      email: 'jackshapperd@email.com',
      password: 'pass123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'Jack Shapperd',
        email: 'johnlocke@email.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update the password', async () => {
    const user = await fakeUserRepository.create({
      name: 'Jack Shapperd',
      email: 'jackshapperd@email.com',
      password: 'pass123456',
    });

    const updatedUser = await updateProfile.execute({
      user_id: user.id,
      name: 'John Locke',
      email: 'johnlocke@email.com',
      old_password: 'pass123456',
      password: '321321',
    });

    expect(updatedUser.password).toBe('321321');
  });

  it('should not be able to update the password with wrong old password', async () => {
    const user = await fakeUserRepository.create({
      name: 'Jack Shapperd',
      email: 'jackshapperd@email.com',
      password: 'pass123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'John Locke',
        email: 'johnlocke@email.com',
        old_password: 'wrong-password',
        password: '321321',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update a user that does not exist.', async () => {
    expect(
      updateProfile.execute({
        user_id: 'non-existing-user-id',
        name: 'John Locke',
        email: 'johnlocke@email.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
