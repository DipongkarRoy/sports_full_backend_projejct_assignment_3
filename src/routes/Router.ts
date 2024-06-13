import { Router } from 'express';
import { userRoutes } from '../module/user/user.routes';
import { facilityRouter } from '../module/facility/facility.routes';
import { authRouter } from '../module/auth/auth.routes';

const router = Router();
const moduleRoutes = [
  {
    path: '/auth',
    route: userRoutes,
  },
  {
    path: '/auth',
    route: authRouter,
  },
  {
    path: '/facility',
    route: facilityRouter,
  },
];

moduleRoutes.forEach((elemet) => router.use(elemet.path, elemet.route));

export default router;
