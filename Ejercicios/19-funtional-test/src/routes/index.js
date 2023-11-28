import express from 'express';
import userRouter from './users.js';
import { pingController, adminAccessController } from '../controllers/misc-controller.js';
import { validateAdminMiddleware } from '../middlewares/misc-middleware.js';
import { fibonacciController } from '../controllers/fibonacci-controller.js';


const router = express.Router();

router.use('/user', userRouter);

export default router;
