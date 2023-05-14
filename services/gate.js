import Gate from '../models/Gate.js';
import createError from '../helpers/errorHelpers.js';

const getGates = async () => {
    try {
        const gates = await Gate.find().lean().exec();
        return gates;
    } catch (error) {
        throw createError(500, `Error getting gates `, error.message);
    }
};

const getGate = async (id) => {
    try {
        const gate = await Gate.findById(id).lean().exec();
        return gate;
    } catch (error) {
        throw createError(500, `Error getting gateId: ${id}`, error.message);
    }
};

const getGatesByAirportId = async (airportId) => {
    try {
        const gate = await Gate.find({ airport: airportId }).lean().exec();
        return gate;
    } catch (error) {
        throw createError(500, `Error getting gates by airportId: ${airportId}`, error.message);
    }
};

const createGate = async (gate) => {
    try {
        const newGate = await Gate.create(gate);
        return newGate;
    } catch (error) {
        throw createError(500, `Error adding new gate`, error.message);
    }
};

const updateGate = async (id, gate) => {
    try {
        const newGate = await Gate.findByIdAndUpdate(id, gate,
            {
                new: true,
                runValidators: true
            }
        ).lean().exec();
        return newGate;
    } catch (error) {
        throw createError(500, `Error updating gateId: ${id}`, error.message);
    }
};

const deleteGate = async (id) => {
    try {
        const gate = await Gate.findByIdAndDelete(id).lean().exec();
        return gate;
    } catch (error) {
        throw createError(500, `Error deleting dateId: ${id}`, error.message);
    }
};

export default {
    getGates,
    getGate,
    getGatesByAirportId,
    createGate,
    updateGate,
    deleteGate
};