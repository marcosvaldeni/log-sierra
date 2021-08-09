import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '../../../services/CreateUserService';

export default class UserControllers {

  public async create(req: Request, res: Response): Promise<Response> {
    
    const { name, email, password } = req.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      password
    });

    return res.json({ user: 'test' });
  }
}
