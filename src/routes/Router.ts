import { Router } from 'express';
import { userRoutes } from '../module/user/user.routes';

const router = Router();
const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
];

moduleRoutes.forEach((elemet) => router.use(elemet.path, elemet.route));


export default router ;
