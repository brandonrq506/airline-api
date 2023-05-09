import express from 'express';
import { getCards, getCard, updateCard, addCard, deleteCard } from '../controllers/card.js';

const router = express.Router();

router.get('/', getCards);

router.get('/:id', getCard);

router.post('/', addCard);

router.put('/:id', updateCard);

router.delete('/:id', deleteCard);

export default router;