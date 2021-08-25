import 'reflect-metadata';
import { v4 as uuid } from 'uuid';

import FakeLogRepository from '../repositories/fakes/FakeLogRepository';
import CreateLogInService from './CreateLogInService';
import CreateLogOutService from './CreateLogOutService';
import ListLogsService from './ListLogsService';

let fakeLogRepository: FakeLogRepository;
let createLogOutService: CreateLogOutService;
let createLogInService: CreateLogInService;
let listLogsService: ListLogsService;

describe('ListLogs', () => {
  beforeEach(() => {
    fakeLogRepository = new FakeLogRepository();

    createLogOutService = new CreateLogOutService(fakeLogRepository);
    createLogInService = new CreateLogInService(fakeLogRepository);
    listLogsService = new ListLogsService(fakeLogRepository);
  });

  it('should be able to list log a givem user', async () => {
    const user_id = uuid();

    await createLogInService.execute(user_id);
    const log_01 = await createLogOutService.execute(user_id);

    await createLogInService.execute(user_id);
    const log_02 = await createLogOutService.execute(user_id);

    await createLogInService.execute(user_id);
    const log_03 = await createLogOutService.execute(user_id);

    const logs = await listLogsService.execute(user_id);

    expect(logs).toEqual([log_01, log_02, log_03]);
  });
});
