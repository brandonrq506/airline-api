import express from 'express';
import verifyJwt from '../middleware/verifyJwt.js';
import verifyRoles from '../middleware/verifyRoles.js';
import ROLES_LIST from '../config/roles_list.js'


import { addAirlineToAirport, deleteAirlineFromAirport } from '../controllers/airline_airport.js';

const router = express.Router();
const { Admin } = ROLES_LIST;

router.use(verifyJwt);
router.use(verifyRoles(Admin));

router.post('/', addAirlineToAirport);
router.delete('/:airlineId/:airportId', deleteAirlineFromAirport);

export default router;