import type { Request, Response } from 'express';
import httpStatus from 'http-status';
import { asyncHandler } from '../utils/asyncHandler.js';
import { createUser, validateUser } from '../services/user.service.js';
import { issueTokens } from '../services/auth.service.js';
import env from '../config/env.js';

function setAuthCookies(res: Response, accessToken: string, refreshToken: string) {
  res.cookie('accessToken', accessToken, {
    httpOnly: true,
    secure: env.COOKIE_SECURE,
    sameSite: 'lax',
    maxAge: 1000 * 60 * 60 // 1 hour (note token itself controls expiry)
  });
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: env.COOKIE_SECURE,
    sameSite: 'lax',
    maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
  });
}

export const register = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const user = await createUser(name, email, password);
  const { accessToken, refreshToken } = issueTokens(user);
  setAuthCookies(res, accessToken, refreshToken);
  res.status(httpStatus.CREATED).json({ user, accessToken });
});

export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await validateUser(email, password);
  const { accessToken, refreshToken } = issueTokens(user);
  setAuthCookies(res, accessToken, refreshToken);
  res.status(httpStatus.OK).json({ user, accessToken });
});

export const logout = asyncHandler(async (_req: Request, res: Response) => {
  res.clearCookie('accessToken');
  res.clearCookie('refreshToken');
  res.status(httpStatus.OK).json({ message: 'Logged out' });
});
