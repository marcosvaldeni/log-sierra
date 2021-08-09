import { Router } from 'express';

import UserControllers from '../controllers/UserController';

const userRouter = Router();
const usersControllers = new UserControllers();

userRouter.post('/', usersControllers.create);

export default userRouter;
