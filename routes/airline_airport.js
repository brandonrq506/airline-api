import express from 'express';
import { addAirlineToAirport, deleteAirlineFromAirport } from '../controllers/airline_airport.js';

const router = express.Router();

router.post('/', addAirlineToAirport);

router.delete('/:airlineId/:airportId', deleteAirlineFromAirport);

export default router;