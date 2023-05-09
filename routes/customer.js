import express from 'express';
import { getCustomers, getCustomer, updateCustomer, deleteCustomer } from '../controllers/customer.js';
import { getCustomerCards } from '../controllers/card.js';

const router = express.Router();

router.get('/', getCustomers);

router.get('/:id', getCustomer);

router.get('/:id/cards', getCustomerCards)

router.put('/:id', updateCustomer);

router.delete('/:id', deleteCustomer);

export default router;
