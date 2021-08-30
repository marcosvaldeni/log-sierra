import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import LogController from '../controllers/LogController';

const logRouter = Router();
const logController = new LogController();

logRouter.use(ensureAuthenticated);

logRouter.get('/list', logController.list);
logRouter.get('/logout', logController.logout);

export default logRouter;
