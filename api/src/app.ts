import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import routes from './routes/index.js';
import { notFound, errorHandler } from './middlewares/error.middleware.js';
import env from './config/env.js';
import { swaggerDocument } from './config/swagger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Security & parsing
app.use(helmet());
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Logs (dev only pretty)
app.use(morgan('dev'));

// Public frontend (forms + dashboard)
app.use(express.static(path.join(__dirname, '..', 'public')));

// API routes
app.use('/api/v1', routes);

// Swagger docs
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Health check
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

// 404 + error
app.use(notFound);
app.use(errorHandler);

const allowedOrigins = ["http://localhost:3000", "http://localhost:4000"];


app.use(express.json());


export default app;
