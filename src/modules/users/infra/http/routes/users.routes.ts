import { Router } from 'express';

// import UserRepository from '../../typeorm/repositories/UserRepository';

const userRouter = Router();

userRouter.get('/', async (req, res) => {
  return res.json({ message: 'LogSierra Users' });
});

export default userRouter;
