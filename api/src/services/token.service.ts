import jwt from 'jsonwebtoken';
import env from '../config/env.js';

export function signAccessToken(payload: object): string {
  return jwt.sign(payload, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRES_IN });
}

export function verifyAccessToken(token: string): any {
  return jwt.verify(token, env.JWT_SECRET);
}

export function signRefreshToken(payload: object): string {
  return jwt.sign(payload, env.REFRESH_TOKEN_SECRET, { expiresIn: env.REFRESH_TOKEN_EXPIRES_IN });
}

export function verifyRefreshToken(token: string): any {
  return jwt.verify(token, env.REFRESH_TOKEN_SECRET);
}
