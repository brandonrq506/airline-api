import asyncHandler from '../middleware/asyncHandler.js';
import createError from '../helpers/errorHelpers.js';
import routeService from '../services/route.js';

export const getRoutes = asyncHandler(async (req, res, next) => {
    const routes = await routeService.getRoutes();
    res.status(200).json(routes);
});

export const getRouteById = asyncHandler(async (req, res, next) => {
    const routeId = req.params.id;
    const route = await routeService.getRouteById(routeId);
    if (!route) {
        return next(createError(404, `No route with id ${routeId}`));
    }
    res.status(200).json(route);
});

export const getFareByRouteId = asyncHandler(async (req, res, next) => {
    const routeId = req.params.id;
    const fares = await routeService.getFaresByRouteId(routeId);
    if (!fares)
        return next(createError(404, `No fares for route with id ${routeId}`));

    res.status(200).json(fares);
});

export const addRoute = asyncHandler(async (req, res, next) => {
    const route = req.body;
    const newRoute = await routeService.addRoute(route);

    if (!newRoute)
        return next(createError(500, `Route could not be created`));

    res.status(201).json(newRoute);
});

export const updateRoute = asyncHandler(async (req, res, next) => {
    const routeId = req.params.id;
    const route = req.body;
    const updatedRoute = await routeService.updateRoute(routeId, route);

    if (!updatedRoute)
        return next(createError(500, `Route could not be updated`));

    res.status(200).json(updatedRoute);
});

export const deleteRoute = asyncHandler(async (req, res, next) => {
    //To do: Must delete the associated Fares.
    const routeId = req.params.id;
    const deletedRoute = await routeService.deleteRoute(routeId);

    if (!deletedRoute)
        return next(createError(500, `Route could not be deleted`));

    res.sendStatus(204);
});