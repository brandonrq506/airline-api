import airportService from '../services/airport.js';
import asyncHandler from '../middleware/asyncHandler.js';
import createError from '../helpers/errorHelpers.js';

export const getAirports = asyncHandler(async (req, res, next) => {
    const airports = await airportService.getAllAirports();
    res.status(200).json(airports);
});

export const getAirport = asyncHandler(async (req, res, next) => {
    const airportId = req.params.id;
    const airport = await airportService.getAirportById(airportId);

    if (!airport)
        return next(createError(404, `Airport not found`));

    res.status(200).json(airport);
});

export const createAirport = asyncHandler(async (req, res, next) => {
    const airport = req.body;
    const newAirport = await airportService.createAirport(airport);
    res.status(201).json(newAirport);
});

export const updateAirport = asyncHandler(async (req, res, next) => {
    const airportId = req.params.id;
    const airport = req.body;
    const updatedAirport = await airportService.updateAirport(airportId, airport);
    res.status(200).json(updatedAirport);
});

export const deleteAirport = asyncHandler(async (req, res, next) => {
    const airportId = req.params.id;
    const deletedAirport = await airportService.deleteAirport(airportId);
    res.status(200).json(deletedAirport);
});