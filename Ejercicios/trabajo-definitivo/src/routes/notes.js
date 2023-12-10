import express from 'express';
import {getNotes,getNoteContent, postNote, updateNote, deleteNote} from '../controllers/notes-controller.js';
import { getNotesWithOptions } from '../controllers/pagination-controller.js';

const router = express.Router();

router.get('/', getNotes);
router.get('/:name', getNoteContent);
router.post('/:name', postNote);
router.patch('/:name', updateNote);
router.delete('/:name', deleteNote);

router.get('/notesWithOptions', getNotesWithOptions);

export default router;