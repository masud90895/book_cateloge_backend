import { Category } from '@prisma/client';
import prisma from '../../../shared/prisma';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';

// create new category
const createNewCategory = async (data: Category) => {
  const result = await prisma.category.create({
    data,
  });

  return result;
};

// get all categories
const getAllCategories = async () => {
  const result = await prisma.category.findMany({
    include: {
      books: true,
    },
  });

  return result;
};

// get single category

const getSingleCategory = async (id: string) => {
  const result = await prisma.category.findUnique({
    where: {
      id,
    },
    include: {
      books: true,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Category not found !!');
  }

  return result;
};

export const CategoriesService = {
  createNewCategory,
  getAllCategories,
  getSingleCategory,
};
