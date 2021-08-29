import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateActiveOnService from '../../../services/CreateActiveOnService';
import CreateActiveOffService from '../../../services/CreateActiveOffService';
import ListActivesService from '../../../services/ListActivesService';

export default class ActiveController {
  public async activeOn(req: Request, res: Response): Promise<Response> {
    const user_id = req.user.id;

    const createActiveOn = container.resolve(CreateActiveOnService);

    const user = await createActiveOn.execute(user_id);

    return res.json(user);
  }

  public async activeOff(req: Request, res: Response): Promise<Response> {
    const user_id = req.user.id;

    const createActiveOff = container.resolve(CreateActiveOffService);

    const user = await createActiveOff.execute(user_id);

    return res.json(user);
  }

  public async activeList(req: Request, res: Response): Promise<Response> {
    const user_id = req.user.id;

    const listActives = container.resolve(ListActivesService);

    const actives = await listActives.execute(user_id);

    return res.json(actives);
  }
}
