import { Router } from 'express';
import { facilityRouter } from '../module/facility/facility.routes';
import { authRouter } from '../module/auth/auth.routes';

const router = Router();
const moduleRoutes = [
  {
    path: '/auth',
    route: authRouter,
  },
  {
    path: '/facility',
    route: facilityRouter,
  },
];

moduleRoutes.forEach((element) => router.use(element.path, element.route));

export default router;
