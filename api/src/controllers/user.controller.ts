import type { Request, Response } from 'express';
import httpStatus from 'http-status';
import { asyncHandler } from '../utils/asyncHandler.js';
import { findById } from '../services/user.service.js';

export const me = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.user!.id;
  const user = await findById(userId);
  res.status(httpStatus.OK).json({ user });
});

export const dashboard = asyncHandler(async (_req: Request, res: Response) => {
  res.status(200).json({ message: 'Welcome to your dashboard' });
});
