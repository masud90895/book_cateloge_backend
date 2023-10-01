import { Response } from 'express';

type IApiResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string | null;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
  data?: T | null;
};

const sendResponse = <T>(res: Response, data: IApiResponse<T>): void => {
  const responseData: IApiResponse<T> = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message || null,
    meta: data.meta || null || undefined,
    data: data.data || null || undefined,
  };

  res.status(data.statusCode).json(responseData);
};

export default sendResponse;

type IApiSignInResponse<T> = {
  success: boolean;
  statusCode: number;
  message?: string | null;
  token?: T | null;
};

export const sendSignInResponse = <T>(
  res: Response,
  data: IApiSignInResponse<T>
): void => {
  const responseData: IApiSignInResponse<T> = {
    success: data.success,
    statusCode: data.statusCode,
    message: data.message || null,
    token: data.token || null || undefined,
  };

  res.status(data.statusCode).json(responseData);
};
