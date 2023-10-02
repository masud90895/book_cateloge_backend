import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { CategoriesService } from './category.service';


// create new category

const createNewCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoriesService.createNewCategory(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category created successfully!',
    data: result,
  });
});

export const CategoryController = {
  createNewCategory,
};
