import express from 'express';
import { getAirline, getAirlines, createAirline, updateAirline, deleteAirline } from '../controllers/airline.js';
import { getAirportsForAirline } from '../controllers/airline_airport.js';
import { getRoutesForAirline } from '../controllers/airline_route.js';

const router = express.Router();

router.get('/', getAirlines);

router.get('/:id', getAirline);

router.get('/:id/airports', getAirportsForAirline);

router.get('/:id/routes', getRoutesForAirline);

router.post('/', createAirline);

router.put('/:id', updateAirline);

router.delete('/:id', deleteAirline);

export default router;