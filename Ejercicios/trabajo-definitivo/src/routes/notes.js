import express from 'express';
import {getNotes,getNoteContent, postNote, updateNote, deleteNote} from '../controllers/notes-controller.js';
import { importNote, exportNote } from '../controllers/notes-controller.js';
import {getNotesWithOptions} from '../controllers/pagination-controller.js';
const router = express.Router();

router.get('/', getNotes);
router.get('/:name', getNoteContent);
router.post('/:name', postNote);
router.patch('/:name', updateNote);
router.delete('/:name', deleteNote);

router.get('/notesWithOptions', getNotesWithOptions);
router.post('/import', importNote);
router.get('/export/:name', exportNote);


export default router;