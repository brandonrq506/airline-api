import customerService from '../services/customer.js';
import asyncHandler from '../middleware/asyncHandler.js';

export const getCustomers = asyncHandler(async (req, res) => {
    const customers = await customerService.getAllCustomers();
    res.status(200).json(customers);
});

export const getCustomer = asyncHandler(async (req, res) => {
    const customerId = req.params.id;
    const customer = await customerService.getCustomerById(customerId);

    if (!customer)
        res.status(404).json({ message: `Customer not found` });

    res.status(200).json(customer);
});

export const updateCustomer = asyncHandler(async (req, res) => {
    const customerId = req.params.id;
    const customer = req.body;
    const updatedCustomer = await customerService.updateCustomer(customerId, customer);
    res.status(200).json(updatedCustomer);
});

export const deleteCustomer = asyncHandler(async (req, res) => {
    const customerId = req.params.id;
    const deletedCustomer = await customerService.deleteCustomer(customerId);
    res.status(200).json(deletedCustomer);
});