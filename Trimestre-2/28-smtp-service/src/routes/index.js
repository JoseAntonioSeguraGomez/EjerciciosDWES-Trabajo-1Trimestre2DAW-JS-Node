import express from 'express';
import { mailController } from '../controllers/mail-controller.js';
import miscRouter from './misc-router.js';

const router = express.Router();

router.post('/mail', mailController);


router.use(miscRouter);

export default router;
