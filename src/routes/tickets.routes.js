import express from 'express';
import { 
    createTicket, 
    getAllTickets, 
    getTicketById, 
    updateTicketById, 
    deleteTicketById,
    addMessageToTicket,
} from '../controllers/tickets.controller.js';

import { auth, adminAuth } from '../middlewares/auth.middleware.js';

const router = express.Router();

// Crear un nuevo tiquet
router.post('/', auth, createTicket);

// Obtener todos los tiquets (solo para administradores)
router.get('/', adminAuth, getAllTickets);

// Obtener un tiquet por ID
router.get('/:id', auth, getTicketById);

// Actualizar un tiquet por ID
router.patch('/:id', auth, updateTicketById);

// Eliminar un tiquet por ID
router.delete('/:id', adminAuth, deleteTicketById);

// Añadir un mensaje a un tiquet
router.post('/:id/messages', auth, addMessageToTicket);

export default router;