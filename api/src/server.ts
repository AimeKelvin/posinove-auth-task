import env from './config/env.js';
import logger from './config/logger.js';
import app from './app.js';
import { connectDB } from './config/db.js';

const server = app.listen(env.PORT, async () => {
  await connectDB();
  logger.info(`Auth API running on http://localhost:${env.PORT}`);
  logger.info(`Swagger UI at http://localhost:${env.PORT}/docs`);
});

process.on('SIGINT', async () => {
  logger.info('Shutting down...');
  server.close(() => process.exit(0));
});
