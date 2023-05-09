import Country from "../models/Country.js";

export const getAllCountries = async () => {
    try {
        const countries = await Country.find().lean().exec();
        return countries;
    } catch (error) {
        throw error;
    }
};

export const getCountryById = async (countryId) => {
    try {
        const country = await Country.findById(countryId).lean().exec();
        return country;
    } catch (error) {
        throw error;
    }
};

export const createCountry = async (country) => {
    try {
        const newCountry = await Country.create(country);
        return newCountry;
    } catch (error) {
        throw error;
    }
};

export const updateCountry = async (countryId, country) => {
    try {
        const newCountry = await Country.findByIdAndUpdate(countryId, country,
            {
                new: true,
                runValidators: true
            }
        ).exec();
        return newCountry;
    } catch (error) {
        throw error;
    }
};

export const deleteCountry = async (countryId) => {
    try {
        const country = await Country.findByIdAndRemove(countryId).exec();
        return country;
    } catch (error) {
        throw error;
    }
};

export default {
    getAllCountries,
    getCountryById,
    createCountry,
    updateCountry,
    deleteCountry
};