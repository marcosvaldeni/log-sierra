import { Router } from 'express';

import MoviesControllers from '../controllers/UsersController';

const userRouter = Router();
const moviesControllers = new MoviesControllers();

userRouter.get('/', moviesControllers.get);

export default userRouter;
