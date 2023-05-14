import Route from "../models/Route.js";
import createError from "../helpers/errorHelpers.js";

const getRoutes = async () => {
    try {
        const routes = await Route.find().exec();
        return routes;
    } catch (error) {
        throw createError(500, `Error getting routes`, error.message);
    }
};

const getRouteById = async (id) => {
    try {
        const route = await Route.findById(id).exec();
        return route;
    } catch (error) {
        throw createError(500, `Error getting routeId: ${id}`, error.message);
    }
};

const getFaresByRouteId = async (id) => {
    try {
        const route = await Route.findById(id).lean().exec();
        return route.fares;
    } catch (error) {
        throw createError(500, `Error getting fares by routeId: ${id}`, error.message);
    }
};

const addRoute = async (route) => {
    try {
        const newRoute = await Route.create(route);
        return newRoute;
    } catch (error) {
        throw createError(500, `Error adding new route`, error.message);
    }
};

const updateRoute = async (id, route) => {
    try {
        const newRoute = await Route.findByIdAndUpdate(id, route,

            {
                new: true,
                runValidators: true
            }).lean().exec();
        return newRoute;
    } catch (error) {
        throw createError(500, `Error updating routeId: ${id}`, error.message);
    }
};

const deleteRoute = async (id) => {
    try {
        const route = await Route.findByIdAndDelete(id).lean().exec();
        return route;
    } catch (error) {
        throw createError(500, `Error deleting routeId: ${id}`, error.message);
    }
};

export default {
    getRoutes,
    getRouteById,
    getFaresByRouteId,
    addRoute,
    updateRoute,
    deleteRoute
};