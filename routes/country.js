import express from 'express';
import verifyJwt from '../middleware/verifyJwt.js';
import verifyRoles from '../middleware/verifyRoles.js';
import ROLES_LIST from '../config/roles_list.js'

import { getCountries, getCountry, createCountry, updateCountry, deleteCountry } from '../controllers/country.js';
import { getAirportsbyCountryId } from '../controllers/airport.js';

const router = express.Router();
const { Admin, Editor } = ROLES_LIST;

router.get('/', getCountries);
router.get('/:id', getCountry);
router.get('/:id/airports', getAirportsbyCountryId);

router.use(verifyJwt);
router.post('/', verifyRoles(Admin), createCountry);
router.put('/:id', verifyRoles(Admin, Editor), updateCountry);
router.delete('/:id', verifyRoles(Admin), deleteCountry);

export default router;