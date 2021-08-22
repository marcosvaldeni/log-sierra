import 'reflect-metadata';
import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';
import { errors } from 'celebrate';
import 'express-async-errors';

import AppError from '../../errors/AppError';
import routes from './routes';

import '../typeorm';
import '../../container';

const app = express();

app.use(express.json());
app.use(routes);
app.use(errors());

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.get('/', (req, res) => {
  return res.json({ message: 'LogSierra' });
});

app.listen(process.env.PORT || 3333, () => {
  console.log('Server started on port 3333!');
});
