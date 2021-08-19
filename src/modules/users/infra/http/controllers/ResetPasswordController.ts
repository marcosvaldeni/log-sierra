import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ResetPasswordService from '../../../services/ResetPasswordService';

export default class ResetPasswordController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { password, token } = req.body;

    const resetPassword = container.resolve(ResetPasswordService);

    resetPassword.execute({
      token,
      password,
    });

    return res.status(204).json();
  }
}
