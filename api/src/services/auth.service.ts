import { signAccessToken, signRefreshToken } from './token.service';

export function issueTokens(user: { id: string; email: string }) {
  const accessToken = signAccessToken({ sub: user.id, email: user.email });
  const refreshToken = signRefreshToken({ sub: user.id, email: user.email });
  return { accessToken, refreshToken };
}
