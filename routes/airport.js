import express from 'express';
import { getAirports, getAirport, createAirport, updateAirport, deleteAirport } from '../controllers/airport.js';
import { getAirlinesForAirport } from '../controllers/airline_airport.js';

const router = express.Router();

router.get('/', getAirports);

router.get('/:id', getAirport);

router.get('/:id/airlines', getAirlinesForAirport);

router.post('/', createAirport);

router.put('/:id', updateAirport);

router.delete('/:id', deleteAirport);

export default router;