import asyncHandler from '../middleware/asyncHandler.js'
import createError from '../helpers/errorHelpers.js';
import cardService from '../services/card.js';

export const getCards = asyncHandler(async (req, res, next) => {
    const cards = await cardService.getAllCards();
    res.status(200).json(cards);
});

export const getCard = async (req, res, next) => {
    const cardId = req.params.id;
    const card = await cardService.getCardById(cardId);

    if (!card)
        return next(createError(404, `Card not found`));

    res.status(200).json(card);
}

export const getCustomerCards = async (req, res, next) => {
    const customerId = req.params.id;
    console.log(customerId);
    const cards = await cardService.getCustomerCards(customerId);
    res.status(200).json(cards);
}

export const addCard = async (req, res, next) => {
    const card = req.body;
    const newCard = await cardService.addCard(card);
    res.status(201).json(newCard);
}

export const updateCard = async (req, res, next) => {
    const cardId = req.params.id;
    const card = req.body;
    const updatedCard = await cardService.updateCard(cardId, card);
    res.status(200).json(updatedCard);
}

export const deleteCard = async (req, res, next) => {
    const cardId = req.params.id;
    const deletedCard = await cardService.deleteCard(cardId);
    res.status(200).json(deletedCard);
}