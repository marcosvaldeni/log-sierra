import 'reflect-metadata';
import { v4 as uuid } from 'uuid';

import FakeLogRepository from '../repositories/fakes/FakeLogRepository';
import CreateLogService from './CreateLogService';
import ListLogsService from './ListLogsService';

let fakeLogRepository: FakeLogRepository;
let createLogService: CreateLogService;
let listLogsService: ListLogsService;

describe('ListLogs', () => {
  beforeEach(() => {
    fakeLogRepository = new FakeLogRepository();

    createLogService = new CreateLogService(fakeLogRepository);
    listLogsService = new ListLogsService(fakeLogRepository);
  });

  it('should be able to list all logs', async () => {
    const user_id = uuid();

    const log_01 = await createLogService.execute({ user_id, type: true });
    const log_02 = await createLogService.execute({ user_id, type: false });
    const log_03 = await createLogService.execute({ user_id, type: true });
    const log_04 = await createLogService.execute({ user_id, type: true });

    const logs = await listLogsService.execute(user_id);

    await expect(logs).toEqual([log_01, log_02, log_03, log_04]);
  });
});
