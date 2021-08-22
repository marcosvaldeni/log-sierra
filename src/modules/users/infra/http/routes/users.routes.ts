import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import UserControllers from '../controllers/UserController';

const userRouter = Router();
const usersControllers = new UserControllers();

userRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      password_confirmation: Joi.string().required().valid(Joi.ref('password')),
    },
  }),
  usersControllers.create,
);

export default userRouter;
