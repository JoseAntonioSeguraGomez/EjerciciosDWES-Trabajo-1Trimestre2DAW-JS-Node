import express from 'express';
import notesController from './notes.js';
import {getNotesWithOptions} from '../controllers/pagination-controller.js';


const router = express.Router();

//Ejercicio 1
router.use('/notes', notesController);

//Ruta para la autenticación
//router.post('/auth', authenticateUser);

router.get('/notesWithOptions', getNotesWithOptions);


export default router;
