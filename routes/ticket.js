import express from 'express';
import { getTicketById, getTickets, createTicket, updateTicket, deleteTicket } from '../controllers/ticket.js';

const router = express.Router();

router.get('/', getTickets);

router.get('/:id', getTicketById);

router.post('/', createTicket);

router.put('/:id', updateTicket);

router.delete('/:id', deleteTicket);

export default router;