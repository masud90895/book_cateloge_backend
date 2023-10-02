import { Category } from '@prisma/client';
import prisma from '../../../shared/prisma';

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

export const CategoriesService = {
  createNewCategory,
  getAllCategories,
};
