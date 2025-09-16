import type { Request, Response, NextFunction } from 'express';
import ApiError from '../utils/ApiError.js';
import httpStatus from 'http-status';
import logger from '../config/logger.js';

export function notFound(_req: Request, _res: Response, next: NextFunction) {
  next(new ApiError(httpStatus.NOT_FOUND, 'Route not found'));
}

export function errorHandler(err: any, _req: Request, res: Response, _next: NextFunction) {
  const status = err instanceof ApiError ? err.statusCode : httpStatus.INTERNAL_SERVER_ERROR;
  const message = err.message ?? 'Internal Server Error';
  if (status >= 500) logger.error(err);
  res.status(status).json({ status, message });
}
