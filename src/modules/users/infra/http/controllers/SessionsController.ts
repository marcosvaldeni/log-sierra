import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import CreateLogService from '../../../services/CreateLogService';

import AuthenticateUserService from '../../../services/AuthenticateUserService';

export default class SessionController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const authenticateUser = container.resolve(AuthenticateUserService);

    const { user, token } = await authenticateUser.execute({
      email,
      password,
    });

    const login = container.resolve(CreateLogService);

    await login.execute({ user_id: user.id, type: true });

    return res.json({ user: classToClass(user), token });
  }
}
