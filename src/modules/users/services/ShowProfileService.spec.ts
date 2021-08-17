import 'reflect-metadata';

import AppError from '../../../shared/errors/AppError';

import FakeUserRepository from '../repositories/fakes/FakeUserRepository';
import ShowProfileService from './ShowProfileService';

let fakeUserRepository: FakeUserRepository;
let showProfile: ShowProfileService;

describe('ShowProfile', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUserRepository();

    showProfile = new ShowProfileService(fakeUserRepository);
  });

  it('should be able to show the profile', async () => {
    const user = await fakeUserRepository.create({
      name: 'John Locke',
      email: 'johnlocke@email.com',
      password: '123123132',
    });

    const profile = await showProfile.execute({
      user_id: user.id,
    });

    expect(profile.name).toBe('John Locke');
    expect(profile.email).toBe('johnlocke@email.com');
  });

  it('should not be able to show the profile from no existing user', async () => {
    expect(
      showProfile.execute({
        user_id: 'non-existing-user-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
