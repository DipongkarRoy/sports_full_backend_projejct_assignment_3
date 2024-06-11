import express, { NextFunction, Request, Response, json } from 'express';
const app = express();
import cors from 'cors';
import { movieRouters } from './module/movie/movie.routes';

app.use(cors());
app.use(express.json());

app.use('/api', movieRouters);

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({
      success: true,
      massage: 'backend setup project server running',
    });
  } catch (error) {
    next(error);
  }
});
app.all('*', (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    massage: 'Router not found data',
  });
});
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    res.status(400).json({
      success: false,
      massage: 'error handle data',
    });
  }
});

 export default app;
