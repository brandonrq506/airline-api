import customerService from '../services/customer.js';
import asyncHandler from '../middleware/asyncHandler.js';
import createError from '../helpers/errorHelpers.js';

export const getCustomers = asyncHandler(async (req, res, next) => {
    const customers = await customerService.getAllCustomers();
    res.status(200).json(customers);
});

export const getCustomer = asyncHandler(async (req, res, next) => {
    const customerId = req.params.id;
    const customer = await customerService.getCustomerById(customerId);

    if (!customer)
        return next(createError(404, `Customer not found`));

    res.status(200).json(customer);
});

export const updateCustomer = asyncHandler(async (req, res, next) => {
    const customerId = req.params.id;
    const customer = req.body;
    const updatedCustomer = await customerService.updateCustomer(customerId, customer);
    if (!updatedCustomer)
        return next(createError(404, `Customer not found`));

    res.status(200).json(updatedCustomer);
});

export const deleteCustomer = asyncHandler(async (req, res, next) => {
    const customerId = req.params.id;
    const deletedCustomer = await customerService.deleteCustomer(customerId);
    if (!deletedCustomer)
        return next(createError(404, `Customer not found`));

    res.sendStatus(204);
});