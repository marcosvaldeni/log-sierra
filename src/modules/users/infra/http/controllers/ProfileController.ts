import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateProfileService from '../../../services/UpdateProfileService';
import ShowProfileService from '../../../services/ShowProfileService';

export default class ProfileController {
  public async update(req: Request, res: Response): Promise<Response> {
    const user_id = req.user.id;
    const { name, email, old_password, password } = req.body;

    const updadeProfile = container.resolve(UpdateProfileService);

    const user = await updadeProfile.execute({
      user_id,
      name,
      email,
      old_password,
      password,
    });

    return res.json(user);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const user_id = req.user.id;

    const showProfile = container.resolve(ShowProfileService);

    const user = await showProfile.execute({
      user_id,
    });

    return res.json(user);
  }
}
