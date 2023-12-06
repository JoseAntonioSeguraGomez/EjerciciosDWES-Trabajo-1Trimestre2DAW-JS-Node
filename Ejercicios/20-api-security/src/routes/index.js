import express from 'express';
import userRouter from './users.js';
import { login } from '../controllers/login-controller.js';
const router = express.Router();
import { postUser } from '../controllers/users-controller.js';
import { checkToken } from '../middlewares/auth-middleware.js';

router.use('/users', checkToken, userRouter);
router.use('/user', userRouter);

router.post('/login', login)
router.post('/signin', postUser)

export default router;
