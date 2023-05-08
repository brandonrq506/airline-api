import asyncHandler from '../middleware/asyncHandler.js'
import cardService from '../services/card.js';

export const getCards = asyncHandler(async (req, res) => {
    const cards = await cardService.getAllCards();
    res.status(200).json(cards);
});

export const getCard = async (req, res) => {
    const cardId = req.params.id;
    const card = await cardService.getCardById(cardId);

    if (!card)
        res.status(404).json({ message: `Card not found` });

    res.status(200).json(card);
}

export const addCard = async (req, res) => {
    const card = req.body;
    const newCard = await cardService.addCard(card);
    res.status(201).json(newCard);
}

export const updateCard = async (req, res) => {
    const cardId = req.params.id;
    const card = req.body;
    const updatedCard = await cardService.updateCard(cardId, card);
    res.status(200).json(updatedCard);
}

export const deleteCard = async (req, res) => {
    const cardId = req.params.id;
    const deletedCard = await cardService.deleteCard(cardId);
    res.status(200).json(deletedCard);
}