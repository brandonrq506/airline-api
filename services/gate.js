import Gate from '../models/Gate.js';

const getGates = async () => {
    try {
        const gates = await Gate.find().lean().exec();
        return gates;
    } catch (error) {
        throw error;
    }
};

const getGate = async (id) => {
    try {
        const gate = await Gate.findById(id).lean().exec();
        return gate;
    } catch (error) {
        throw error;
    }
};

const getGatesByAirportId = async (airportId) => {
    try {
        const gate = await Gate.find({ airport: airportId }).lean().exec();
        return gate;
    } catch (error) {
        throw error;
    }
};

const createGate = async (gate) => {
    try {
        const newGate = await Gate.create(gate);
        return newGate;
    } catch (error) {
        throw error;
    }
};

const updateGate = async (id, gate) => {
    try {
        const newGate = await Gate.findByIdAndUpdate(id, gate,
            {
                new: true,
                runValidators: true
            }
        ).exec();
        return newGate;
    } catch (error) {
        throw error;
    }
};

const deleteGate = async (id) => {
    try {
        const gate = await Gate.findByIdAndDelete(id).lean().exec();
        return gate;
    } catch (error) {
        throw error;
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