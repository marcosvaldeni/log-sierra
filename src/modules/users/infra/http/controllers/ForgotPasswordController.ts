import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SendForgotPasswordEmail from '../../../services/SendForgotPasswordEmailService';

export default class ForgotPasswordController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;

    const sendForgotPasswordEmail = container.resolve(SendForgotPasswordEmail);

    sendForgotPasswordEmail.execute({
      email,
    });

    return res.status(204).json();
  }
}
