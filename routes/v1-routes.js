import express from 'express';
import customerRoutes from './customer.js'
import sessionRoutes from './session.js'
const router = express.Router();

router.use('/auth', sessionRoutes)
router.use('/customers', customerRoutes);

export default router;