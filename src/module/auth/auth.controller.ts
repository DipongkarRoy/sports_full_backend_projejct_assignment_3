import config from '../../app/config';
import catchAsyne from '../../utils/catchAsyne';
import { authServices } from './auth.services';

const registerUser = catchAsyne(async (req, res) => {
  const result = await authServices.register(req.body);

  res.status(200).json({
    success: true,
    message: 'User registered successfully',
    data: result,
  });
});
const loginUser = catchAsyne(async (req, res) => {
  const { accessToken, refressToken } = await authServices.login(req.body);

  res.cookie('refreshToken', refressToken, {
    httpOnly: true,
    secure: config.node_dev === 'production',
  });
  res.status(200).json({
    success: true,
    message: 'User logged in successfully',
    data: {
      accessToken,
    },
  });
});

export const authControllers = {
  registerUser,
  loginUser,
};
