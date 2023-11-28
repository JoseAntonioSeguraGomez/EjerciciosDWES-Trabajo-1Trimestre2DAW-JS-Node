//Ejemplo
import express from 'express';
import {getUsers, getUser, postUser, updateUser, deleteUser} from '../controllers/users-controller.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', postUser);
router.path('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;