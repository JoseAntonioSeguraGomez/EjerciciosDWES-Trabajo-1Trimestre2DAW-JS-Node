import express from 'express';
import notesController from './notes.js';
import { authenticateJWT } from '../middlewares/auth-middleware.js';
import { authenticateUser } from '../controllers/auth-controller.js';
import { errorMiddleware } from '../middlewares/error-middleware.js';

const router = express.Router();

//Ruta para la autenticación
router.post('/login', authenticateUser);

router.use('/notes', authenticateJWT, errorMiddleware, notesController);





export default router;
