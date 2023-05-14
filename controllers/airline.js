import airlineService from '../services/airline.js';
import createError from '../helpers/errorHelpers.js';
import asyncHandler from '../middleware/asyncHandler.js';

export const getAirlines = asyncHandler(async (req, res, next) => {
    const airlines = await airlineService.getAirlines();
    res.status(200).json(airlines);
});

export const getAirline = asyncHandler(async (req, res, next) => {
    const airlineId = req.params.id;
    const airline = await airlineService.getAirline(airlineId);
    if (!airline)
        return next(createError(404, `Airline not found with id ${airlineId}`));

    res.status(200).json(airline);
});

export const createAirline = asyncHandler(async (req, res, next) => {
    const airline = req.body;
    const newAirline = await airlineService.createAirline(airline);

    if (!newAirline)
        return next(createError(400, 'Unable to create airline'));
    res.status(201).json(newAirline);
});

export const updateAirline = asyncHandler(async (req, res, next) => {
    const airlineId = req.params.id;
    const airline = req.body;
    const updatedAirline = await airlineService.updateAirline(airlineId, airline);
    if (!updatedAirline)
        return next(createError(404, `Airline not found with id ${airlineId}`));

    res.status(200).json(updatedAirline);
});

export const deleteAirline = asyncHandler(async (req, res, next) => {
    const airlineId = req.params.id;
    const deletedAirline = await airlineService.deleteAirline(airlineId);
    if (!deletedAirline)
        return next(createError(404, `Airline not found with id ${airlineId}`));

    res.sendStatus(204);
});