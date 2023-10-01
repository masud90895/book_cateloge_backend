import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserAuthService } from './userAuth.service';

const createNewUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserAuthService.createNewUser(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully!',
    data: result,
  });
});

export const UserAuthController = {
  createNewUser,
};
