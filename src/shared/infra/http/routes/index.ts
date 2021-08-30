import { Router } from 'express';

import userRouter from '../../../../modules/users/infra/http/routes/users.routes';
import sessionsRouter from '../../../../modules/users/infra/http/routes/sessions.routes';
import profileRouter from '../../../../modules/users/infra/http/routes/profile.routes';
import passwordRouter from '../../../../modules/users/infra/http/routes/password.routes';
import activeRouter from '../../../../modules/actives/infra/http/routes/active.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/profile', profileRouter);
routes.use('/password', passwordRouter);
routes.use('/actives', activeRouter);

export default routes;
