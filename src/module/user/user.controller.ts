import { userServices } from './user.service';
import catchAsyne from '../../utils/catchAsyne';

const createUser = catchAsyne(async (req, res) => {
  const result = await userServices.createUserIntoDb(req.body);
  res.status(200).json({
    success: true,
    massage: "User registered successfully",
    data: result,
  });
});

const getAllUser = catchAsyne(async (req, res) => {
  const result = await userServices.getAllUserInToDb(req.query);
  res.status(200).json({
    success: true,
    massage: "User all successfully",
    data: result,
  });
});

export const userControllers = {
  createUser,
  getAllUser
};
