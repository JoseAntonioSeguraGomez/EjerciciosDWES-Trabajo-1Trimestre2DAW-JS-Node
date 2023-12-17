import express from 'express';
import notesController from './notes.js';
import { authenticateJWT } from '../middlewares/auth-middleware.js';
import { authenticateUser } from '../controllers/auth-controller.js';
import { errorMiddleware } from '../middlewares/error-middleware.js';
import {importNote, exportNote} from '../controllers/notes-controller.js';
import {getNotesWithOptions} from '../controllers/pagination-controller.js';

const router = express.Router();

//Ruta para la autenticación
router.get('/notesWithOptions',authenticateJWT, getNotesWithOptions);

// Login
router.post('/login', authenticateUser);

// Importar y exportar
router.post('/import',authenticateJWT, importNote);
router.get('/export/:name',authenticateJWT, exportNote);

// Ruta Principal
router.use('/notes',authenticateJWT, errorMiddleware, notesController);





export default router;
