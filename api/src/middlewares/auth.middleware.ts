import type { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import ApiError from '../utils/ApiError.js';
import { verifyAccessToken } from '../services/token.service.js';

export function authenticate(req: Request, _res: Response, next: NextFunction) {
  try {
    const header = req.headers.authorization;
    const fromHeader = header?.startsWith('Bearer ') ? header.substring(7) : null;
    const fromCookie = (req as any).cookies?.accessToken as string | undefined;
    const token = fromHeader ?? fromCookie;
    if (!token) throw new ApiError(httpStatus.UNAUTHORIZED, 'Authentication required');

    const decoded = verifyAccessToken(token) as { sub: string };
    req.user = { id: decoded.sub };
    next();
  } catch {
    next(new ApiError(httpStatus.UNAUTHORIZED, 'Invalid or expired token'));
  }
}
