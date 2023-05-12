import Airline_Airport from '../services/airline_airport.js';
import asyncHandler from '../middleware/asyncHandler.js';
import createError from '../helpers/errorHelpers.js';

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

export const addAirlineToAirport = asyncHandler(async (req, res, next) => {
    const { airline, airport } = req.body;
    const airline_airport = await Airline_Airport.addAirline_Airport(airline, airport);

    if (!airline_airport) {
        return next(createError(400, 'Unable to add airline to airport'));
    }

    res.status(201).json(airline_airport);
});

export const deleteAirlineFromAirport = asyncHandler(async (req, res, next) => {
    const { airlineId, airportId } = req.params;
    const airline_airport = await Airline_Airport.deleteAirline_Airport(airlineId, airportId);

    if (!airline_airport)
        return next(createError(400, 'Unable to delete airline from airport'));

    res.status(200).json(airline_airport);
});
