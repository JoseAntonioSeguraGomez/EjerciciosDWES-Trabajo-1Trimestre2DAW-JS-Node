//Ejemplo
import express from 'express';
import {getUser, postUser} from '../controllers/users-controller.js';

const router = express.Router();

router.get('', getUser);
router.get('', postUser);

export default router;