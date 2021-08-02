import { Request, Response } from 'express';
// import { container } from 'tsyringe';
import CreateUserService from '../../../services/CreateUserService';

// import UserRepository from '../../typeorm/repositories/UserRepository';

export default class UsersControllers {

  public async create(req: Request, res: Response): Promise<Response> {
    
    try {
      const { name, email, password } = req.body;

      const createUser = new CreateUserService();

      const user = await createUser.execute({
        name,
        email,
        password
      });
      return res.json(user);
      
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }

  }
}
