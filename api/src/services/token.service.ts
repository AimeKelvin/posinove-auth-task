import jwt, { SignOptions, JwtPayload } from "jsonwebtoken";
import env from "../config/env.js";

// --- Generate Access Token ---
export function signAccessToken(payload: object): string {
  return jwt.sign(
    payload,
    env.JWT_SECRET as string,
    { expiresIn: env.JWT_EXPIRES_IN as string | number } as SignOptions
  );
}

// --- Generate Refresh Token ---
export function signRefreshToken(payload: object): string {
  return jwt.sign(
    payload,
    env.REFRESH_TOKEN_SECRET as string,
    { expiresIn: env.REFRESH_TOKEN_EXPIRES_IN as string | number } as SignOptions
  );
}

// --- Verify Access Token ---
export function verifyAccessToken(token: string): JwtPayload | string {
  return jwt.verify(token, env.JWT_SECRET as string);
}

// --- Verify Refresh Token (optional) ---
export function verifyRefreshToken(token: string): JwtPayload | string {
  return jwt.verify(token, env.REFRESH_TOKEN_SECRET as string);
}
