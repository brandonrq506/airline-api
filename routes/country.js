import express from 'express';
import { getCountries, getCountry, createCountry, updateCountry, deleteCountry } from '../controllers/country.js';

const router = express.Router();

router.get('/', getCountries);

router.get('/:id', getCountry);

router.post('/', createCountry);

router.put('/:id', updateCountry);

router.delete('/:id', deleteCountry);

export default router;