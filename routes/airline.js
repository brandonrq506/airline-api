import express from 'express';
import verifyJwt from '../middleware/verifyJwt.js';
import verifyRoles from '../middleware/verifyRoles.js';
import ROLES_LIST from '../config/roles_list.js'

import { getAirline, getAirlines, createAirline, updateAirline, deleteAirline } from '../controllers/airline.js';
import { getAirportsForAirline } from '../controllers/airline_airport.js';
import { getRoutesForAirline } from '../controllers/airline_route.js';

const router = express.Router();
const { Admin, Editor } = ROLES_LIST;

router.get('/', getAirlines);
router.get('/:id', getAirline);
router.get('/:id/airports', getAirportsForAirline);
router.get('/:id/routes', getRoutesForAirline);

router.use(verifyJwt);

router.post('/', verifyRoles(Admin), createAirline);
router.put('/:id', verifyRoles(Admin, Editor), updateAirline);
router.delete('/:id', verifyRoles(Admin), deleteAirline);

export default router;