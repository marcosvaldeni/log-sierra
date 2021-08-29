import 'reflect-metadata';
import { v4 as uuid } from 'uuid';

import FakeActiveRepository from '../repositories/fakes/FakeActiveRepository';
import CreateActiveOutService from './CreateActiveOffService';
import CreateActiveOnService from './CreateActiveOnService';

let fakeActiveRepository: FakeActiveRepository;
let createActiveOutService: CreateActiveOutService;
let createActiveOnService: CreateActiveOnService;

describe('CreateActiveOff', () => {
  beforeEach(() => {
    fakeActiveRepository = new FakeActiveRepository();

    createActiveOutService = new CreateActiveOutService(fakeActiveRepository);
    createActiveOnService = new CreateActiveOnService(fakeActiveRepository);
  });

  it('should be able to create a new activeout', async () => {
    const activeOn = await createActiveOnService.execute(uuid());

    const activeOff = await createActiveOutService.execute(activeOn.user_id);

    await expect(activeOff.activeOn).toBeTruthy();
    await expect(activeOff.activeOff).toBeTruthy();
  });
});
