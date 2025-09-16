import { Router } from 'express';
import { authenticate } from '../middlewares/auth.middleware.js';
import { dashboard, me } from '../controllers/user.controller.js';

const router = Router();

router.get('/me', authenticate, me);
router.get('/dashboard', authenticate, dashboard);

export default router;
