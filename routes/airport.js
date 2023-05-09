import express from 'express';
import { getAirports, getAirport, createAirport, updateAirport, deleteAirport } from '../controllers/airport.js';

const router = express.Router();

router.get('/', getAirports);

router.get('/:id', getAirport);

router.post('/', createAirport);

router.put('/:id', updateAirport);

router.delete('/:id', deleteAirport);

export default router;