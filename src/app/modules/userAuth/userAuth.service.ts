import { User } from '@prisma/client';
import { IUserReturn } from './userAuth.interface';
import bcrypt from 'bcrypt';
import config from '../../../config';
import prisma from '../../../shared/prisma';

// create new user
const createNewUser = async (data: User): Promise<IUserReturn> => {
  const { password, ...newUserData } = data;

  const hashedPassword = await bcrypt.hash(
    password,
    Number(config.bcrypt_salt_rounds)
  );
  const result = await prisma.user.create({
    data: {
      password: hashedPassword,
      ...newUserData,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      contactNo: true,
      address: true,
      profileImg: true,
    },
  });
  return result;
};

export const UserAuthService = {
  createNewUser,
};
