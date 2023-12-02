import express from 'express';
import {getNotes, postNote, updateNote, deleteNote} from '../controllers/notes-controller.js';

const router = express.Router();

router.get('/', getNotes);
router.post('/:name', postNote);
router.patch('/:name', updateNote);
router.delete('/:name', deleteNote);

export default router;