import 'reflect-metadata';
import { v4 as uuid } from 'uuid';

import FakeActiveRepository from '../repositories/fakes/FakeActiveRepository';
import CreateActiveOutService from './CreateActiveOffService';
import CreateActiveInService from './CreateActiveOnService';

let fakeActiveRepository: FakeActiveRepository;
let createActiveOutService: CreateActiveOutService;
let createActiveInService: CreateActiveInService;

describe('CreateActiveOff', () => {
  beforeEach(() => {
    fakeActiveRepository = new FakeActiveRepository();

    createActiveOutService = new CreateActiveOutService(fakeActiveRepository);
    createActiveInService = new CreateActiveInService(fakeActiveRepository);
  });

  it('should be able to create a new activeout', async () => {
    const activeIn = await createActiveInService.execute(uuid());

    const activeOut = await createActiveOutService.execute(activeIn.user_id);

    await expect(activeOut.activeOn).toBeTruthy();
    await expect(activeOut.activeOff).toBeTruthy();
  });
});
