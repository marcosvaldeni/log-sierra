import 'reflect-metadata';
import { v4 as uuid } from 'uuid';

import FakeLogRepository from '../repositories/fakes/FakeLogRepository';
import CreateLogService from './CreateLogService';

let fakeLogRepository: FakeLogRepository;
let createLogService: CreateLogService;

describe('CreateLog', () => {
  beforeEach(() => {
    fakeLogRepository = new FakeLogRepository();

    createLogService = new CreateLogService(fakeLogRepository);
  });

  it('should be able to register log in', async () => {
    const log = await createLogService.execute({
      user_id: uuid(),
      type: true,
    });

    await expect(log).toHaveProperty('id');
    await expect(log.type).toEqual(true);
  });

  it('should be able to register log out', async () => {
    const user_id = uuid();
    await createLogService.execute({
      user_id,
      type: true,
    });

    const log = await createLogService.execute({
      user_id,
      type: false,
    });

    await expect(log).toHaveProperty('id');
    await expect(log.type).toEqual(false);
  });
});
