import Airline from '../models/airline.js';
import createError from '../helpers/errorHelpers.js';

const getAirlines = async () => {
    try {
        const airlines = await Airline.find().lean().exec();
        return airlines;
    } catch (error) {
        throw createError(500, `Error getting airlines`, error.message);
    }
};

const getAirline = async (id) => {
    try {
        const airline = await Airline.findById(id).lean().exec();
        return airline;
    } catch (error) {
        throw createError(500, `Error getting airlineId: ${id}`, error.message);
    }
};

const createAirline = async (airline) => {
    try {
        const newAirline = await Airline.create(airline);
        return newAirline;
    } catch (error) {
        throw createError(500, `Error adding new airline`, error.message);
    }
};

const updateAirline = async (id, airline) => {
    try {
        const updatedAirline = await Airline.findByIdAndUpdate(id, airline,
            {
                new: true,
                runValidators: true
            }
        ).lean().exec();
        return updatedAirline;
    } catch (error) {
        throw createError(500, `Error updating airlineId: ${id}`, error.message);
    }
};

const deleteAirline = async (id) => {
    try {
        const deletedAirline = await Airline.findByIdAndDelete(id).lean().exec();
        return deletedAirline;
    } catch (error) {
        throw createError(500, `Error deleting airlineId: ${id}`, error.message);
    }
};

export default {
    getAirlines,
    getAirline,
    createAirline,
    updateAirline,
    deleteAirline
};