import express from 'express';
import verifyJwt from '../middleware/verifyJwt.js';

import customerRoutes from './customer.js'
import sessionRoutes from './session.js'
const router = express.Router();

router.use('/auth', sessionRoutes);
router.use(verifyJwt);
router.use('/customers', customerRoutes);

export default router;