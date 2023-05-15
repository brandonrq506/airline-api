import express from 'express';
import verifyJwt from '../middleware/verifyJwt.js';
import verifyRoles from '../middleware/verifyRoles.js';
import ROLES_LIST from '../config/roles_list.js'

import { getTicketById, getTickets, createTicket, updateTicket, deleteTicket } from '../controllers/ticket.js';

const router = express.Router();
const { Admin, Editor } = ROLES_LIST;

router.use(verifyJwt);

router.get('/', verifyRoles(Admin, Editor), getTickets);

router.get('/:id', getTicketById);

router.post('/', createTicket);

router.put('/:id', verifyRoles(Admin, Editor), updateTicket);

router.delete('/:id', deleteTicket);

export default router;