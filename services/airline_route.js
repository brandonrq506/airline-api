import Airline_Route from '../models/Airline_Routes.js';

const getAirlinesForRoute = async (routeId) => {
    try {
        const airlines = await Airline_Route.find({ route: routeId }).populate('airline').exec();
        return airlines;
    } catch (error) {
        throw error;
    }
};

const getRoutesForAirline = async (airlineId) => {
    try {
        const routes = await Airline_Route.find({ airline: airlineId }).populate('route').exec();
        return routes;
    } catch (error) {
        throw error;
    }
};

const addAirline_Routes = async (airlineId, routeId) => {
    try {
        const airline_route = await Airline_Route.create({ airline: airlineId, route: routeId });
        return airline_route;
    } catch (error) {
        throw error;
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
        throw error;
    }
};

export default {
    getAirlinesForRoute,
    getRoutesForAirline,
    addAirline_Routes,
    deleteAirline_Routes
};