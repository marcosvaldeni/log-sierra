import 'reflect-metadata';
import { v4 as uuid } from 'uuid';

import FakeLogRepository from '../repositories/fakes/FakeLogRepository';
import CreateLogOutService from './CreateLogOutService';
import CreateLogInService from './CreateLogInService';

let fakeLogRepository: FakeLogRepository;
let createLogOutService: CreateLogOutService;
let createLogInService: CreateLogInService;

describe('CreateLogOut', () => {
  beforeEach(() => {
    fakeLogRepository = new FakeLogRepository();

    createLogOutService = new CreateLogOutService(fakeLogRepository);
    createLogInService = new CreateLogInService(fakeLogRepository);
  });

  it('should be able to create a new logout', async () => {
    const logIn = await createLogInService.execute(uuid());

    const logOut = await createLogOutService.execute(logIn.user_id);

    await expect(logOut.login).toBeTruthy();
    await expect(logOut.logout).toBeTruthy();
  });
});
