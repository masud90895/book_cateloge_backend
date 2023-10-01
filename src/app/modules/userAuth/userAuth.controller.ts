import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse, { sendSignInResponse } from '../../../shared/sendResponse';
import { UserAuthService } from './userAuth.service';

// create user
const createNewUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserAuthService.createNewUser(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully!',
    data: result,
  });
});

// login
const userLogin = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body;
  const result = await UserAuthService.userLogin(loginData);

  sendSignInResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Logged in successfully!',
    token: result?.accessToken,
  });
});

export const UserAuthController = {
  createNewUser,
  userLogin,
};
