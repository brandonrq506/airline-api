import Route from "../models/Route.js";

const getRoutes = async () => {
    try {
        const routes = await Route.find().exec();
        return routes;
    } catch (error) {
        throw error;
    }
};

const getRouteById = async (id) => {
    try {
        const route = await Route.findById(id).exec();
        return route;
    } catch (error) {
        throw error;
    }
};

const addRoute = async (route) => {
    try {
        const newRoute = await Route.create(route);
        return newRoute;
    } catch (error) {
        throw error;
    }
};

const updateRoute = async (id, route) => {
    try {
        const newRoute = await Route.findByIdAndUpdate(id, route,

            {
                new: true,
                runValidators: true
            }).exec();
        return newRoute;
    } catch (error) {
        throw error;
    }
};

const deleteRoute = async (id) => {
    try {
        const route = await Route.findByIdAndDelete(id).lean().exec();
        return route;
    } catch (error) {
        throw error;
    }
};

export default {
    getRoutes,
    getRouteById,
    addRoute,
    updateRoute,
    deleteRoute
};