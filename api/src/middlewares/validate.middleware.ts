import type { Request, Response, NextFunction } from 'express';
import type { ObjectSchema } from 'joi';
import ApiError from '../utils/ApiError.js';
import httpStatus from 'http-status';

export function validate(schema: ObjectSchema) {
  return (req: Request, _res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false, stripUnknown: true });
    if (error) {
      return next(
        new ApiError(httpStatus.BAD_REQUEST, error.details.map(d => d.message).join(', '))
      );
    }
    next();
  };
}
