import express from 'express';
import { getRoutes, getRouteById, getFareByRouteId, addRoute, updateRoute, deleteRoute } from '../controllers/route.js';
import { getScheduleByRouteId } from '../controllers/schedule.js';
import { getAirlinesForRoute } from '../controllers/airline_route.js';

const router = express.Router();

router.get('/', getRoutes);

router.get('/:id', getRouteById);

router.get('/:id/fares', getFareByRouteId);

router.get('/:id/schedules', getScheduleByRouteId);

router.get('/:id/airlines', getAirlinesForRoute);

router.post('/', addRoute);

router.put('/:id', updateRoute);

router.delete('/:id', deleteRoute);

export default router;