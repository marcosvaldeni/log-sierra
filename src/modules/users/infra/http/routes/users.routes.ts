import { Router } from 'express';

import UserControllers from '../controllers/UsersController';

const userRouter = Router();
const usersControllers = new UserControllers();

userRouter.post('/', usersControllers.create);

export default userRouter;
