import express from 'express';
import userRouter from './users.js';
import { validateAdminMiddleware } from '../middlewares/misc-middleware.js';


const router = express.Router();

router.use('/users', userRouter);
router.use('/user', userRouter);

export default router;
