import express from 'express';
const app = express();
import bookRouter from '../router/index';

export default function () {
  app.use(express.json());
  app.use('/api/book/', bookRouter);
  app.listen('3000', console.log('Server started in port 3000'));
}
