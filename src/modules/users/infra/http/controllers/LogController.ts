import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListLogsService from '../../../services/ListLogsService';
import CreateLogService from '../../../services/CreateLogService';

export default class LogControllers {
  public async list(req: Request, res: Response): Promise<Response> {
    const user_id = req.user.id;

    const listLogs = container.resolve(ListLogsService);

    const logs = await listLogs.execute(user_id);

    return res.json(logs);
  }

  public async logout(req: Request, res: Response): Promise<Response> {
    const user_id = req.user.id;

    const createLog = container.resolve(CreateLogService);

    const log = await createLog.execute({ user_id, type: false });

    return res.json(log);
  }
}
