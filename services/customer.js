import Customer from '../models/Customer.js';
import createError from '../helpers/errorHelpers.js';

const getAllCustomers = async () => {
    try {
        const customers = await Customer.find().lean().exec();
        return customers;
    } catch (error) {
        throw createError(500, `Error getting customers`, error.message);
    }
}

const getCustomerById = async (id) => {
    try {
        const customer = await Customer.findById(id).exec();
        return customer;
    } catch (error) {
        throw createError(500, `Error getting customerId: ${id}`, error.message);
    }
}

const getCustomerByEmail = async (email) => {
    try {
        const customer = await Customer.findOne({ email: email }).exec();
        return customer;
    } catch (error) {
        throw createError(500, `Error getting customer by email: ${email}`, error.message);
    }
}

const getCustomerByToken = async (refreshToken) => {
    try {
        const customer = await Customer.findOne({ refreshToken: refreshToken }).exec();
        return customer;
    } catch (error) {
        throw createError(500, `Error getting customer by token`, error.message);
    }
}

const addCustomer = async (customer) => {
    try {
        const newCustomer = await Customer.create(customer);
        return newCustomer;
    } catch (error) {
        throw createError(500, `Error adding new customer`, error.message);
    }
}

const updateCustomer = async (id, customer) => {
    try {
        const newCustomer = await Customer.findByIdAndUpdate(id, customer,
            {
                new: true,
                runValidators: true
            }
        ).lean().exec();
        return newCustomer;
    } catch (error) {
        throw createError(500, `Error updating customerId: ${id}`, error.message);
    }
}

const deleteCustomer = async (id) => {
    try {
        const customer = await Customer.findByIdAndDelete(id).lean().exec();
        return customer;
    } catch (error) {
        throw createError(500, `Error deleting customerId: ${id}`, error.message);
    }
}

export default {
    getAllCustomers,
    getCustomerById,
    getCustomerByEmail,
    getCustomerByToken,
    addCustomer,
    updateCustomer,
    deleteCustomer
}