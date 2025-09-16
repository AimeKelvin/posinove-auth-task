import httpStatus from 'http-status';
import ApiError from '../utils/ApiError.js';
import UserModel from '../models/user.model.js';
import { hashPassword, verifyPassword } from '../utils/password.js';

export async function createUser(name: string, email: string, password: string) {
  const exists = await UserModel.findOne({ email });
  if (exists) throw new ApiError(httpStatus.CONFLICT, 'Email already in use');
  const hashed = await hashPassword(password);
  const user = await UserModel.create({ name, email, password: hashed });
  return { id: user._id.toString(), name: user.name, email: user.email };
}

export async function validateUser(email: string, password: string) {
  const user = await UserModel.findOne({ email }).select('+password');
  if (!user) throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid credentials');
  const match = await verifyPassword(password, user.password as unknown as string);
  if (!match) throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid credentials');
  return { id: user._id.toString(), name: user.name, email: user.email };
}

export async function findById(id: string) {
  const user = await UserModel.findById(id);
  if (!user) throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  return { id: user._id.toString(), name: user.name, email: user.email };
}
