import Airport from "../models/Airport.js";
import createError from '../helpers/errorHelpers.js';

const getAllAirports = async () => {
    try {
        const airports = await Airport.find().lean().exec();
        return airports;
    } catch (error) {
        throw createError(500, `Error getting airports`, error.message);
    }
};

const getAirportById = async (id) => {
    try {
        const airport = await Airport.findById(id).lean().exec();
        return airport;
    } catch (error) {
        throw createError(500, `Error getting airportId: ${id}`, error.message);
    }
};

const getAirportsbyCountryId = async (countryId) => {
    try {
        const airports = await Airport.find({ country: countryId }).lean().exec();
        return airports;
    } catch (error) {
        throw createError(500, `Error getting airports by countryId: ${countryId} `, error.message);
    }
}

const createAirport = async (airport) => {
    try {
        const newAirport = await Airport.create(airport);
        return newAirport;
    } catch (error) {
        throw createError(500, `Error adding new airport`, error.message);
    }
};

const updateAirport = async (id, airport) => {
    try {
        const updatedAirport = await Airport.findByIdAndUpdate(id, airport,
            {
                new: true,
                runValidators: true
            }
        ).lean().exec();
        //To do: Check if .lean() is benefitial
        return updatedAirport;
    } catch (error) {
        throw createError(500, `Error updating airportId: ${id}`, error.message);
    }
};

const deleteAirport = async (id) => {
    try {
        const airport = await Airport.findByIdAndDelete(id).lean().exec();
        return airport;
    } catch (error) {
        throw createError(500, `Error deleting airportId: ${id}`, error.message);
    }
};

export default {
    getAllAirports,
    getAirportById,
    getAirportsbyCountryId,
    createAirport,
    updateAirport,
    deleteAirport
};