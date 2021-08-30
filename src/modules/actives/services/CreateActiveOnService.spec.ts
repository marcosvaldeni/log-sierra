import 'reflect-metadata';
import { v4 as uuid } from 'uuid';
import AppError from '../../../shared/errors/AppError';

import FakeActiveRepository from '../repositories/fakes/FakeActiveRepository';
import CreateActiveService from './CreateActiveOnService';

let fakeActiveRepository: FakeActiveRepository;
let createActiveService: CreateActiveService;

describe('CreateActiveOn', () => {
  beforeEach(() => {
    fakeActiveRepository = new FakeActiveRepository();

    createActiveService = new CreateActiveService(fakeActiveRepository);
  });

  it('should be able to create a new ActiveOn', async () => {
    const active = await createActiveService.execute(uuid());

    await expect(active.activeOn).toBeTruthy();
    await expect(active.activeOff).toBeNull();
  });

  it('should not be able to create more then one ActiveOn at time', async () => {
    const user_id = uuid();

    await createActiveService.execute(user_id);

    await expect(createActiveService.execute(user_id)).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
