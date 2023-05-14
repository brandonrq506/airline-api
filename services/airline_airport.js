import Airline_Airport from '../models/airline_airport.js';
import createError from '../helpers/errorHelpers.js';

const getAirlinesForAirport = async (airportId) => {
    try {
        const airlines = await Airline_Airport.find({ airport: airportId }).populate('airline').lean().exec();
        return airlines;
    } catch (error) {
        throw createError(500, `Error getting airlines for airportId: ${airportId}`, error.message);
    }
}

const getAirportsForAirline = async (airlineId) => {
    try {
        const airports = await Airline_Airport.find({ airline: airlineId }).populate('airport').lean().exec();
        return airports;
    } catch (error) {
        throw createError(500, `Error getting airports for airlineId: ${airlineId}`, error.message);
    }
}

const addAirline_Airport = async (airlineId, airportId) => {
    try {
        const airline_airport = await Airline_Airport.create({ airline: airlineId, airport: airportId });
        return airline_airport;
    } catch (error) {
        throw createError(500, `Error adding new airline_airport`, error.message);
    }
}

const deleteAirline_Airport = async (airlineId, airportId) => {
    try {
        const airline_airport = await Airline_Airport.findOneAndDelete(
            {
                airline: airlineId,
                airport: airportId
            }).lean().exec();
        return airline_airport;
    } catch (error) {
        throw createError(500, `Error deleting airline_airport`, error.message);
    }
}

export default {
    getAirlinesForAirport,
    getAirportsForAirline,
    addAirline_Airport,
    deleteAirline_Airport
};