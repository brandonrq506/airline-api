import Airline from '../models/airline.js';

const getAirlines = async () => {
    try {
        const airlines = await Airline.find().lean().exec();
        return airlines;
    } catch (error) {
        throw error;
    }
};

const getAirline = async (id) => {
    try {
        const airline = await Airline.findById(id).lean().exec();
        return airline;
    } catch (error) {
        throw error;
    }
};

const createAirline = async (airline) => {
    try {
        const newAirline = await Airline.create(airline);
        return newAirline;
    } catch (error) {
        throw error;
    }
};

const updateAirline = async (id, airline) => {
    try {
        const updatedAirline = await Airline.findByIdAndUpdate(id, airline,
            {
                new: true,
                runValidators: true
            }
        ).exec();
        return updatedAirline;
    } catch (error) {
        throw error;
    }
};

const deleteAirline = async (id) => {
    try {
        const deletedAirline = await Airline.findByIdAndDelete(id).exec();
        return deletedAirline;
    } catch (error) {
        throw error;
    }
};

export default {
    getAirlines,
    getAirline,
    createAirline,
    updateAirline,
    deleteAirline
};