import express from 'express';
import { getCountries, getCountry, createCountry, updateCountry, deleteCountry } from '../controllers/country.js';
import { getAirportsbyCountryId } from '../controllers/airport.js';

const router = express.Router();

router.get('/', getCountries);

router.get('/:id', getCountry);

router.get('/:id/airports', getAirportsbyCountryId);

router.post('/', createCountry);

router.put('/:id', updateCountry);

router.delete('/:id', deleteCountry);

export default router;