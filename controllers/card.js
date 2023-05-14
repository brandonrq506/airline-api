import asyncHandler from '../middleware/asyncHandler.js'
import createError from '../helpers/errorHelpers.js';
import cardService from '../services/card.js';

export const getCards = asyncHandler(async (req, res, next) => {
    const cards = await cardService.getAllCards();
    res.status(200).json(cards);
});

export const getCard = asyncHandler(async (req, res, next) => {
    const cardId = req.params.id;
    const card = await cardService.getCardById(cardId);

    if (!card)
        return next(createError(404, `Card not found`));

    res.status(200).json(card);
});

export const getCardsByCustomerId = asyncHandler(async (req, res, next) => {
    const customerId = req.params.id;
    const cards = await cardService.getCardsByCustomerId(customerId);
    res.status(200).json(cards);
});

export const addCard = asyncHandler(async (req, res, next) => {
    const card = req.body;
    const newCard = await cardService.addCard(card);

    if (!newCard)
        return next(createError(400, 'Unable to create card'));
    res.status(201).json(newCard);
});

export const updateCard = asyncHandler(async (req, res, next) => {
    const cardId = req.params.id;
    const card = req.body;
    const updatedCard = await cardService.updateCard(cardId, card);
    if (!updatedCard)
        return next(createError(404, `Card not found`));

    res.status(200).json(updatedCard);
});

export const deleteCard = asyncHandler(async (req, res, next) => {
    const cardId = req.params.id;
    const deletedCard = await cardService.deleteCard(cardId);

    if (!deletedCard)
        return next(createError(404, `Card not found`));

    res.sendStatus(204);
});