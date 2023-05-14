import Card from "../models/Card.js";
import createError from '../helpers/errorHelpers.js';

const getAllCards = async () => {
    try {
        const cards = await Card.find().lean().exec();
        return cards;
    } catch (error) {
        throw createError(500, `Error getting cards`, error.message);
    }
}

const getCardById = async (id) => {
    try {
        const card = await Card.findById(id).lean().exec();
        return card;
    } catch (error) {
        throw createError(500, `Error getting cardId: ${id}`, error.message);
    }
}

const getCardsByCustomerId = async (id) => {
    try {
        const cards = await Card.find({ customer: id }).lean().exec();
        return cards;
    } catch (error) {
        throw createError(500, `Error getting cards by customerId: ${id}`, error.message);
    }
}

const addCard = async (card) => {
    try {
        const newCard = await Card.create(card);
        return newCard;
    } catch (error) {
        throw createError(500, `Error adding new card`, error.message);
    }
}

const updateCard = async (id, card) => {
    try {
        const newCard = await Card.findByIdAndUpdate(id, card,
            {
                new: true,
                runValidators: true
            }
        ).lean().exec();
        return newCard;
    } catch (error) {
        throw createError(500, `Error updating cardId: ${id}`, error.message);
    }
    //Run validators = true
    //New = true
}

const deleteCard = async (id) => {
    try {
        const card = await Card.findByIdAndDelete(id).lean().exec();
        return card;
    } catch (error) {
        throw createError(500, `Error deleting cardId: ${id}`, error.message);
    }
}

export default {
    getAllCards,
    getCardById,
    getCardsByCustomerId,
    addCard,
    updateCard,
    deleteCard
};