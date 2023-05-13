import express from 'express';
import { getRoutes, getRouteById, addRoute, updateRoute, deleteRoute } from '../controllers/route.js';

const router = express.Router();

router.get('/', getRoutes);

router.get('/:id', getRouteById);

router.post('/', addRoute);

router.put('/:id', updateRoute);

router.delete('/:id', deleteRoute);

export default router;