import express from 'express';
import notesController from './notes.js';



const router = express.Router();

//Ejercicio 1
router.use('/notes', notesController);

//Ruta para la autenticación
//router.post('/auth', authenticateUser);


export default router;
