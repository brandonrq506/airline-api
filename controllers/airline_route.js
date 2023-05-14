import airline_routeService from '../services/airline_route.js';
import asyncHandler from '../middleware/asyncHandler.js';
import createError from '../helpers/errorHelpers.js';

export const getAirlinesForRoute = asyncHandler(async (req, res, next) => {
    const routeId = req.params.id;
    const airlines = await airline_routeService.getAirlinesForRoute(routeId);
    res.status(200).json(airlines);
});

export const getRoutesForAirline = asyncHandler(async (req, res, next) => {
    const airlineId = req.params.id;
    const routes = await airline_routeService.getRoutesForAirline(airlineId);
    res.status(200).json(routes);
});

export const addAirlineToRoute = asyncHandler(async (req, res, next) => {
    const { airline, route } = req.body;
    const airline_route = await airline_routeService.addAirline_Routes(airline, route);

    if (!airline_route) {
        return next(createError(400, 'Unable to add airline to route'));
    }

    res.status(201).json(airline_route);
});

export const deleteAirlineFromRoute = asyncHandler(async (req, res, next) => {
    const { airlineId, routeId } = req.params;
    const airline_route = await airline_routeService.deleteAirline_Routes(airlineId, routeId);

    if (!airline_route)
        return next(createError(400, 'Unable to delete airline from route'));

    res.sendStatus(204);
});