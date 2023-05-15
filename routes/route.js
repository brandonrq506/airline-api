import express from 'express';
import verifyJwt from '../middleware/verifyJwt.js';
import verifyRoles from '../middleware/verifyRoles.js';
import ROLES_LIST from '../config/roles_list.js'

import { getRoutes, getRouteById, getFareByRouteId, addRoute, updateRoute, deleteRoute } from '../controllers/route.js';
import { getScheduleByRouteId } from '../controllers/schedule.js';
import { getAirlinesForRoute } from '../controllers/airline_route.js';

const router = express.Router();
const { Admin, Editor } = ROLES_LIST;

router.get('/', getRoutes);
router.get('/:id', getRouteById);
router.get('/:id/fares', getFareByRouteId);
router.get('/:id/schedules', getScheduleByRouteId);
router.get('/:id/airlines', getAirlinesForRoute);

router.use(verifyJwt);

router.post('/', verifyRoles(Admin), addRoute);
router.put('/:id', verifyRoles(Admin, Editor), updateRoute);
router.delete('/:id', verifyRoles(Admin), deleteRoute);

export default router;