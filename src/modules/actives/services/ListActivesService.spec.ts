import 'reflect-metadata';
import { v4 as uuid } from 'uuid';

import FakeActiveRepository from '../repositories/fakes/FakeActiveRepository';
import CreateActiveInService from './CreateActiveOnService';
import CreateActiveOutService from './CreateActiveOffService';
import ListActivesService from './ListActivesService';

let fakeActiveRepository: FakeActiveRepository;
let createActiveOutService: CreateActiveOutService;
let createActiveInService: CreateActiveInService;
let listActivesService: ListActivesService;

describe('ListActives', () => {
  beforeEach(() => {
    fakeActiveRepository = new FakeActiveRepository();

    createActiveOutService = new CreateActiveOutService(fakeActiveRepository);
    createActiveInService = new CreateActiveInService(fakeActiveRepository);
    listActivesService = new ListActivesService(fakeActiveRepository);
  });

  it('should be able to list Active a givem user', async () => {
    const user_id = uuid();

    await createActiveInService.execute(user_id);
    const Active_01 = await createActiveOutService.execute(user_id);

    await createActiveInService.execute(user_id);
    const Active_02 = await createActiveOutService.execute(user_id);

    await createActiveInService.execute(user_id);
    const Active_03 = await createActiveOutService.execute(user_id);

    const Actives = await listActivesService.execute(user_id);

    expect(Actives).toEqual([Active_01, Active_02, Active_03]);
  });
});
