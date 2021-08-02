import { Request, Response } from 'express';

export default class UsersControllers {

  public async get(req: Request, res: Response): Promise<Response> {
    return res.json({ message: 'Users Controllers' });
  }
}
