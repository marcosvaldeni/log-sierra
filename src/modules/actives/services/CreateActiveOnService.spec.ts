import 'reflect-metadata';
import { v4 as uuid } from 'uuid';

import FakeActiveRepository from '../repositories/fakes/FakeActiveRepository';
import CreateActiveService from './CreateActiveOnService';

let fakeActiveRepository: FakeActiveRepository;
let createActiveService: CreateActiveService;

describe('CreateActiveOn', () => {
  beforeEach(() => {
    fakeActiveRepository = new FakeActiveRepository();

    createActiveService = new CreateActiveService(fakeActiveRepository);
  });

  it('should be able to create a new Activein', async () => {
    const active = await createActiveService.execute(uuid());

    await expect(active.activeOn).toBeTruthy();
    await expect(active.activeOff).toBeNull();
  });
});
