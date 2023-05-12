import express from 'express';
import { getGates, getGate, createGate, updateGate, deleteGate } from '../controllers/gate.js';

const router = express.Router();

router.get('/', getGates);

router.get('/:id', getGate);

router.post('/', createGate);

router.put('/:id', updateGate);

router.delete('/:id', deleteGate);

export default router;