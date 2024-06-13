import { TUser } from '../user/user.interface';
import { UserModel } from '../user/user.model';
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

const login = async (payload: TUser) => {
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
    { jwtPayload },'1d',
    {
      expiresIn: '7d'
    },
  );
  const refressToken = jwt.sign(
    { payload },'3d',
    { expiresIn: '30d' },
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
