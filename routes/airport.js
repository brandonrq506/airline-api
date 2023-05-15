import express from 'express';
import verifyJwt from '../middleware/verifyJwt.js';
import verifyRoles from '../middleware/verifyRoles.js';
import ROLES_LIST from '../config/roles_list.js'

import { getAirports, getAirport, createAirport, updateAirport, deleteAirport } from '../controllers/airport.js';
import { getAirlinesForAirport } from '../controllers/airline_airport.js';
import { getGateByAirportId } from '../controllers/gate.js';

const router = express.Router();
const { Admin, Editor } = ROLES_LIST;

router.get('/', getAirports);
router.get('/:id', getAirport);
router.get('/:id/airlines', getAirlinesForAirport);
router.get('/:id/gates', getGateByAirportId);

router.use(verifyJwt);

router.post('/', verifyRoles(Admin), createAirport);
router.put('/:id', verifyRoles(Admin, Editor), updateAirport);
router.delete('/:id', verifyRoles(Admin), deleteAirport);

export default router;