import express from 'express';
import {getNotes,getNoteContent, postNote, updateNote, deleteNote, importNote, exportNote} from '../controllers/notes-controller.js';
import {getNotesWithOptions} from '../controllers/pagination-controller.js';
const router = express.Router();

// Rutas adicionales
router.get('/notesWithOptions', getNotesWithOptions);
router.post('/import', importNote);
router.get('/export/:name', exportNote);

// Todas las rutas principales
router.get('/', getNotes);
router.get('/:name', getNoteContent);
router.post('/:name', postNote);
router.patch('/:name', updateNote);
router.delete('/:name', deleteNote);

export default router;