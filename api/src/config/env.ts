import dotenv from 'dotenv';
dotenv.config();

const env = {
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  PORT: Number(process.env.PORT ?? 4000),
  MONGO_URI: process.env.MONGO_URI ?? 'mongodb://127.0.0.1:27017/posinove_auth',
  JWT_SECRET: process.env.JWT_SECRET ?? 'change_me',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN ?? '15m',
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET ?? 'change_me_refresh',
  REFRESH_TOKEN_EXPIRES_IN: process.env.REFRESH_TOKEN_EXPIRES_IN ?? '7d',
  COOKIE_SECURE: (process.env.COOKIE_SECURE ?? 'false') === 'true',
  CORS_ORIGIN: process.env.CORS_ORIGIN ?? 'http://localhost:4000',
  LOG_LEVEL: process.env.LOG_LEVEL ?? 'info'
};

export default env;
