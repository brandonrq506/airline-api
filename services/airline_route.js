import Airline_Route from '../models/Airline_Routes.js';
import createError from '../helpers/errorHelpers.js';

const getAirlinesForRoute = async (routeId) => {
    try {
        const airlines = await Airline_Route.find({ route: routeId }).populate('airline').lean().exec();
        return airlines;
    } catch (error) {
        throw createError(500, `Error getting airlines for routeId: ${routeId}`, error.message);
    }
};

const getRoutesForAirline = async (airlineId) => {
    try {
        const routes = await Airline_Route.find({ airline: airlineId }).populate('route').lean().exec();
        return routes;
    } catch (error) {
        throw createError(500, `Error getting routes for airlineId: ${airlineId}`, error.message);
    }
};

const addAirline_Routes = async (airlineId, routeId) => {
    try {
        const airline_route = await Airline_Route.create({ airline: airlineId, route: routeId });
        return airline_route;
    } catch (error) {
        throw createError(500, `Error adding new airline_routes`, error.message);
    }
};

const deleteAirline_Routes = async (airlineId, routeId) => {
    try {
        const airline_route = await Airline_Route.findOneAndDelete(
            {
                airline: airlineId,
                route: routeId
            }
        ).lean().exec();
        return airline_route;
    } catch (error) {
        throw createError(500, `Error deleting airline_routes`, error.message);
    }
};

export default {
    getAirlinesForRoute,
    getRoutesForAirline,
    addAirline_Routes,
    deleteAirline_Routes
};