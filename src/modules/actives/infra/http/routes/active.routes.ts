import { Router } from 'express';

import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAuthenticated';
import ActiveController from '../controllers/ActiveController';

const acitveRouter = Router();
const activeController = new ActiveController();

acitveRouter.use(ensureAuthenticated);

acitveRouter.get('/active-on', activeController.activeOn);
acitveRouter.get('/active-off', activeController.activeOff);
acitveRouter.get('/list', activeController.activeList);

export default acitveRouter;
