import Airport from "../models/Airport.js";

const getAllAirports = async () => {
    try {
        const airports = await Airport.find().lean().exec();
        return airports;
    } catch (error) {
        throw error;
    }
};

const getAirportById = async (id) => {
    try {
        const airport = await Airport.findById(id).lean().exec();
        return airport;
    } catch (error) {
        throw error;
    }
};

const getAirportsbyCountryId = async (countryId) => {
    try {
        const airports = await Airport.find({ country: countryId }).lean().exec();
        return airports;
    } catch (error) {
        throw error;
    }
}

const createAirport = async (airport) => {
    try {
        const newAirport = await Airport.create(airport);
        return newAirport;
    } catch (error) {
        throw error;
    }
};

const updateAirport = async (id, airport) => {
    try {
        const updatedAirport = await Airport.findByIdAndUpdate(id, airport,
            {
                new: true,
                runValidators: true
            }
        ).exec();
        //To do: Check if .lean() is benefitial
        return updatedAirport;
    } catch (error) {
        throw error;
    }
};

const deleteAirport = async (id) => {
    try {
        const airport = await Airport.findByIdAndDelete(id).exec();
        return airport;
    } catch (error) {
        throw error;
    }
};

export default {
    getAllAirports,
    getAirportById,
    getAirportsbyCountryId,
    createAirport,
    updateAirport,
    deleteAirport
};