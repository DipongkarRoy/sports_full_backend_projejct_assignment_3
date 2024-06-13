import { Router } from 'express';
import { userRoutes } from '../module/user/user.routes';
import { facilityRouter } from '../module/facility/facility.routes';

const router = Router();
const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/facility',
    route: facilityRouter,
  },
];

moduleRoutes.forEach((elemet) => router.use(elemet.path, elemet.route));

export default router;
