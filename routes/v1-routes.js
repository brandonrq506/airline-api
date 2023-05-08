import express from 'express';
import customerRoutes from './customer.js'

const router = express.Router();

// router.get('/customers', customerRoutes);
router.use('/customers', customerRoutes);

export default router;