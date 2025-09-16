import { Router } from 'express';
import Joi from 'joi';
import { validate } from '../middlewares/validate.middleware.js';
import { authLimiter } from '../middlewares/rateLimiter.js';
import { login, logout, register } from '../controllers/auth.controller.js';

const router = Router();

const registerSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(8)
    .max(128)
    .pattern(/[A-Z]/, 'one uppercase')
    .pattern(/[a-z]/, 'one lowercase')
    .pattern(/[0-9]/, 'one number')
    .pattern(/[^A-Za-z0-9]/, 'one symbol')
    .required()
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

router.post('/register', authLimiter, validate(registerSchema), register);
router.post('/login', authLimiter, validate(loginSchema), login);
router.post('/logout', logout);

export default router;
