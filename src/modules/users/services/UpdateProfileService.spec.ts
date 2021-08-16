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
});
