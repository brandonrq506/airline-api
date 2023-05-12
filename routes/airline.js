import express from 'express';
import { getAirline, getAirlines, createAirline, updateAirline, deleteAirline } from '../controllers/airline.js';
import { getAirportsForAirline } from '../controllers/airline_airport.js';

const router = express.Router();

router.get('/', getAirlines);

router.get('/:id', getAirline);

router.get('/:id/airports', getAirportsForAirline);

router.post('/', createAirline);

router.put('/:id', updateAirline);

router.delete('/:id', deleteAirline);

export default router;