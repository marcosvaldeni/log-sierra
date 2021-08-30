import 'reflect-metadata';
import { v4 as uuid } from 'uuid';
import AppError from '../../../shared/errors/AppError';

import FakeActiveRepository from '../repositories/fakes/FakeActiveRepository';
import CreateActiveOutService from './CreateActiveOffService';
import CreateActiveOnService from './CreateActiveOnService';

let fakeActiveRepository: FakeActiveRepository;
let createActiveOffService: CreateActiveOutService;
let createActiveOnService: CreateActiveOnService;

describe('CreateActiveOff', () => {
  beforeEach(() => {
    fakeActiveRepository = new FakeActiveRepository();

    createActiveOffService = new CreateActiveOutService(fakeActiveRepository);
    createActiveOnService = new CreateActiveOnService(fakeActiveRepository);
  });

  it('should be able to create close an Active', async () => {
    const activeOn = await createActiveOnService.execute(uuid());

    const activeOff = await createActiveOffService.execute(activeOn.user_id);

    await expect(activeOff.activeOn).toBeTruthy();
    await expect(activeOff.activeOff).toBeTruthy();
  });

  it('should not be able to create an ActiveOff when there is not ActiveOn', async () => {
    await expect(createActiveOffService.execute(uuid())).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
