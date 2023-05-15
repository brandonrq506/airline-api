import express from 'express';
import verifyJwt from '../middleware/verifyJwt.js';
import verifyRoles from '../middleware/verifyRoles.js';
import ROLES_LIST from '../config/roles_list.js'

import { getCustomers, getCustomer, updateCustomer, deleteCustomer } from '../controllers/customer.js';
import { getCardsByCustomerId } from '../controllers/card.js';
import { getTicketsByCustomerId } from '../controllers/ticket.js';

const router = express.Router();
const { Admin, Editor } = ROLES_LIST;

router.use(verifyJwt);
router.get('/', verifyRoles(Admin, Editor), getCustomers);

router.get('/:id', getCustomer);

router.get('/:id/cards', getCardsByCustomerId)

router.get('/:id/tickets', getTicketsByCustomerId)

router.put('/:id', updateCustomer);

router.delete('/:id', deleteCustomer);

export default router;