import 'reflect-metadata';
import { v4 as uuid } from 'uuid';

import FakeLogRepository from '../repositories/fakes/FakeLogRepository';
import CreateLogService from './CreateLogInService';

let fakeLogRepository: FakeLogRepository;
let createLogService: CreateLogService;

describe('CreateLogIn', () => {
  beforeEach(() => {
    fakeLogRepository = new FakeLogRepository();

    createLogService = new CreateLogService(fakeLogRepository);
  });

  it('should be able to create a new login', async () => {
    const log = await createLogService.execute(uuid());

    await expect(log.login).toBeTruthy();
    await expect(log.logout).toBeNull();
  });
});
