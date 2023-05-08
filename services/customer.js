import Customer from '../models/Customer.js';

const getAllCustomers = async () => {
    try {
        const customers = await Customer.find().lean().exec();
        return customers;
    } catch (error) {
        throw error;
    }
}

const getCustomerById = async (id) => {
    try {
        const customer = await Customer.findById(id).exec();
        return customer;
    } catch (error) {
        throw error;
    }
}

const getCustomerByEmail = async (email) => {
    try {
        const customer = await Customer.findOne({ email }).exec();
        return customer;
    } catch (error) {
        throw error;
    }
}

const addCustomer = async (customer) => {
    try {
        const newCustomer = await Customer.create(customer);
        return newCustomer;
    } catch (error) {
        throw error;
    }
}

const updateCustomer = async (id, customer) => {
    try {
        const newCustomer = await Customer.findByIdAndUpdate(id, customer,
            {
                new: true,
                runValidators: true
            }
        ).exec();
        return newCustomer;
    } catch (error) {
        throw error;
    }
}

const deleteCustomer = async (id) => {
    try {
        const customer = await Customer.findByIdAndDelete(id).exec();
        return customer;
    } catch (error) {
        throw error;
    }
}

export default {
    getAllCustomers,
    getCustomerById,
    getCustomerByEmail,
    addCustomer,
    updateCustomer,
    deleteCustomer
}