import express from 'express';
import { userControllers } from './user.controller';
import validRequst from '../../utils/validRequst';
import { userValidations } from './user.validation';

const router = express.Router();

router.post(
  '/sign',
  validRequst(userValidations.UserSchcemaValidation),
  userControllers.createUser,
);
router.get(
  '/',
  userControllers.getAllUser,
);

export const userRoutes = router;
