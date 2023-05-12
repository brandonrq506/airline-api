import Airline_Airport from '../models/airline_airport.js';

const getAirlinesForAirport = async (airportId) => {
    try {
        const airlines = await Airline_Airport.find({ airport: airportId }).populate('airline').exec();
        return airlines;
    } catch (error) {
        throw error;
    }
}

const getAirportsForAirline = async (airlineId) => {
    try {
        const airports = await Airline_Airport.find({ airline: airlineId }).populate('airport').exec();
        return airports;
    } catch (error) {
        throw error;
    }
}

const addAirline_Airport = async (airlineId, airportId) => {
    try {
        const airline_airport = await Airline_Airport.create({ airline: airlineId, airport: airportId });
        return airline_airport;
    } catch (error) {
        throw error;
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
        throw error;
    }
}

export default {
    getAirlinesForAirport,
    getAirportsForAirline,
    addAirline_Airport,
    deleteAirline_Airport
};