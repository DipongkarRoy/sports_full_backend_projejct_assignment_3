import config from '../../app/config';
import { TUser } from '../user/user.interface';
import { UserModel } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import { ispasswordMacthed } from './auth.utlis';
import jwt from 'jsonwebtoken'

const register = async (payload: TUser) => {
  const user = await UserModel.find({ email: payload.email });
  if (!user) {
    throw new Error('user is allready exits');
  }
  payload.role = 'user';

  const result = await UserModel.create(payload);
  return result;
};

const login = async (payload: TLoginUser) => {
  const user = await UserModel.findOne({ email:payload.email }).select('+password');

  if (!user) {
    throw new Error('user not found');
  }
  const passwordMacth = await ispasswordMacthed(
    payload.password,
    user.password,
  );
  if (!passwordMacth) {
    throw new Error('user password not mactched');
  }
  const jwtPayload = {
    email: user.email,
    role: user.role,
  };

  const accessToken = jwt.sign(
    { jwtPayload },config.access_token as string,
    {
      expiresIn: config.access_token_expired
    },
  );
  const refressToken = jwt.sign(
    { payload },config.refress_token as string,
    { expiresIn: config.refresh_token_expired },
  );

  return {
    accessToken,
    refressToken,
  };
};

export const authServices = {
  register,
  login,
};
