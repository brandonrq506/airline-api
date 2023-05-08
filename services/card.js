import Card from "../models/Card.js";

const getAllCards = async () => {
    try {
        const cards = await Card.find().lean().exec();
        return cards;
    } catch (error) {
        throw error;
    }
}

const getCardById = async (id) => {
    try {
        const card = await Card.findById(id).lean().exec();
        return card;
    } catch (error) {
        throw error;
    }
}

const getCustomerCards = async (id) => {
    try {
        const cards = await Card.find({ customerId: id }).lean().exec();
        return cards;
    } catch (error) {
        throw error;
    }
}

const addCard = async (card) => {
    try {
        const newCard = await Card.create(card).exec();
        return newCard;
    } catch (error) {
        throw error;
    }
}

const updateCard = async (id, card) => {
    try {
        const newCard = await Card.findByIdAndUpdate(id, card,
            {
                new: true,
                runValidators: true
            }
        ).exec();
        return newCard;
    } catch (error) {
        throw error;
    }
    //Run validators = true
    //New = true
}

const deleteCard = async (id) => {
    try {
        const card = await Card.findByIdAndDelete(id).exec();
        return card;
    } catch (error) {
        throw error;
    }
}

export default {
    getAllCards,
    getCardById,
    getCustomerCards,
    addCard,
    updateCard,
    deleteCard
};