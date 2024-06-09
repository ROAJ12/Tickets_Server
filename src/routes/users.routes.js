import express from 'express';
import { registerUser, loginUser, getUserTickets, getUserInfo} from '../controllers/users.controller.js';

import { auth } from '../middlewares/auth.middleware.js';

const router = express.Router();

// Registro de usuario
router.post('/register', registerUser);

// Login de usuario
router.post('/login', loginUser);

// Obtener todos los tiquets de un usuario
router.get('/:userId/tickets', auth, getUserTickets);

// Get information of a specific user (protected route, requires authentication)
router.get('/:userId', auth, getUserInfo);

export default router;