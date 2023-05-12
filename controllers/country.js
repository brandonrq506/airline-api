import countryService from '../services/country.js';
import asyncHandler from '../middleware/asyncHandler.js';
import createError from '../helpers/errorHelpers.js';

export const getCountries = asyncHandler(async (req, res, next) => {
    const countries = await countryService.getAllCountries();
    res.status(200).json(countries);
});

export const getCountry = asyncHandler(async (req, res, next) => {
    const countryId = req.params.id;
    const country = await countryService.getCountryById(countryId);

    if (!country)
        return next(createError(404, `Country not found`));

    res.status(200).json(country);
});

export const createCountry = asyncHandler(async (req, res, next) => {
    const country = req.body;
    const newCountry = await countryService.createCountry(country);
    res.status(201).json(newCountry);
});

export const updateCountry = asyncHandler(async (req, res, next) => {
    const countryId = req.params.id;
    const country = req.body;
    const updatedCountry = await countryService.updateCountry(countryId, country);
    if (!updatedCountry)
        return next(createError(404, `Country not found`));

    res.status(200).json(updatedCountry);
});

export const deleteCountry = asyncHandler(async (req, res, next) => {
    const countryId = req.params.id;
    const deletedCountry = await countryService.deleteCountry(countryId);
    if (!deletedCountry)
        return next(createError(404, `Country not found`));

    res.sendStatus(200);
});