import Country from "../models/Country.js";
import createError from '../helpers/errorHelpers.js';

const getAllCountries = async () => {
    try {
        const countries = await Country.find().lean().exec();
        return countries;
    } catch (error) {
        throw createError(500, `Error getting countries `, error.message);
    }
};

const getCountryById = async (countryId) => {
    try {
        const country = await Country.findById(countryId).lean().exec();
        return country;
    } catch (error) {
        throw createError(500, `Error getting countryId: ${id}`, error.message);
    }
};

const createCountry = async (country) => {
    try {
        const newCountry = await Country.create(country);
        return newCountry;
    } catch (error) {
        throw createError(500, `Error adding new country`, error.message);
    }
};

const updateCountry = async (countryId, country) => {
    try {
        const newCountry = await Country.findByIdAndUpdate(countryId, country,
            {
                new: true,
                runValidators: true
            }
        ).lean().exec();
        return newCountry;
    } catch (error) {
        throw createError(500, `Error updating countryId: ${id}`, error.message);
    }
};

const deleteCountry = async (countryId) => {
    try {
        const country = await Country.findByIdAndRemove(countryId).lean().exec();
        return country;
    } catch (error) {
        throw createError(500, `Error deleting countryId: ${id}`, error.message);
    }
};

export default {
    getAllCountries,
    getCountryById,
    createCountry,
    updateCountry,
    deleteCountry
};