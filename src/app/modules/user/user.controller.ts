import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { userServices } from './user.services';

const createUser = catchAsync(async (req, res) => {
  const result = await userServices.createUserIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User created successfully!',
    data: result,
  });
});

const getSingleUser = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const result = await userServices.getSingleUserFromDB(userId);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User retrieved successfully!',
    data: result,
  });
});

const softDeleteSingleUser = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const result = await userServices.softDeleteSingleUserIntoDB(userId);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User deleted successfully!',
    data: result,
  });
});

const getAllUsers = catchAsync(async (req, res) => {
  const result = await userServices.getAllUsersFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Retrieve users successfully!',
    data: result,
  });
});

export const userControllers = {
  createUser,
  getSingleUser,
  softDeleteSingleUser,
  getAllUsers,
};
