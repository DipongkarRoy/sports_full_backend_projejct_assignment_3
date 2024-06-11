import express from 'express';
import { userControllers } from './user.controller';
import validRequst from '../../utils/validRequst';
import { userValidations } from './user.validation';

const router = express.Router();

router.post(
  '/create-user',
  validRequst(userValidations.UserSchcemaValidation),
  userControllers.createUser,
);

export const userRoutes = router;
