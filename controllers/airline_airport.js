import Airline_Airport from '../services/airline_airport.js';
import asyncHandler from '../middleware/asyncHandler.js';

export const getAirlinesForAirport = asyncHandler(async (req, res, next) => {
    const airportId = req.params.id;
    const airlines = await Airline_Airport.getAirlinesForAirport(airportId);
    res.status(200).json(airlines);
});

export const getAirportsForAirline = asyncHandler(async (req, res, next) => {
    const airlineId = req.params.id;
    const airports = await Airline_Airport.getAirportsForAirline(airlineId);
    res.status(200).json(airports);
});