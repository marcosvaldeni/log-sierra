import 'reflect-metadata';

import dotenv from 'dotenv';
import express from 'express';
import routes from './routes';

import '../typeorm';

dotenv.config

const app = express();

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
  return res.json({ message: 'LogSierra' });
});

app.listen(process.env.PORT || 3333, () => {
  console.log('Server started on port 3333!');
});
