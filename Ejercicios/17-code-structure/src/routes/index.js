import express from 'express';
import userRouter from './users.js';
import { pingController, adminAccessController } from '../controllers/misc-controller.js';
import { validateAdminMiddleware } from '../middlewares/misc-middleware.js';
import { fibonacciController } from '../controllers/fibonacci-controller.js';


const router = express.Router();

//Ejercicio 1
router.get('/ping', pingController);
//Ejemplos
router.get('/admin', validateAdminMiddleware, adminAccessController);
router.use('/user', userRouter);
//Ejercicio 2
router.get('/fibonacci', fibonacciController);

export default router;
