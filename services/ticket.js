import Ticket from '../models/Ticket.js';
import routeService from '../services/route.js';
import createError from '../helpers/errorHelpers.js';

const getTickets = async () => {
    try {
        const tickets = await Ticket.find().lean().exec();
        return tickets;
    } catch (error) {
        throw createError(500, `Error getting tickets`, error.message);
    }
};

const getTicketById = async (ticketId) => {
    try {
        const ticket = await Ticket.findById(ticketId)
            .populate('customer')
            .populate('route')
            .populate('schedule')
            .lean()
            .exec();

        ticket.route.fares = undefined;
        return ticket;
    } catch (error) {
        throw createError(500, `Error getting ticketId: ${ticketId}`, error.message);

    }
};

const getTicketsByCustomerId = async (customerId) => {
    try {
        const tickets = await Ticket.find({ customer: customerId })
            .populate('customer')
            .populate('route')
            .populate('schedule')
            .lean()
            .exec();

        tickets.forEach(t => t.route.fares = undefined);
        return tickets;
    } catch (error) {
        throw createError(500, `Error getting tickets by customerId: ${customerId}`, error.message);

    }
};

const createTicket = async (ticket) => {
    try {
        const route = await routeService.getRouteById(ticket.route);
        const fare = route.fares.id(ticket.fare);
        const fareTicket = {
            ...ticket,
            fare: fare,
        }
        //route.fares = Object.keys(classes).map(c => ({ class: c, base: route.baseFare }));

        const newTicket = await Ticket.create(fareTicket);
        return newTicket;
    } catch (error) {
        throw createError(500, `Error adding ticket`, error.message);

    }
};

const updateTicket = async (ticketId, ticket) => {
    try {
        const updTicket = await Ticket.findByIdAndUpdate(ticketId, ticket,
            {
                new: true,
                runValidators: true,
            }
        ).lean().exec();
        return updTicket;
    } catch (error) {
        throw createError(500, `Error updating ticket`, error.message);

    }
};

const deleteTicket = async (ticketId) => {
    try {
        const delTicket = await Ticket.findByIdAndDelete(ticketId).lean().exec();
        return delTicket;
    } catch (error) {
        throw createError(500, `Error deleting ticket`, error.message);

    }
};

export default {
    getTickets,
    getTicketById,
    getTicketsByCustomerId,
    createTicket,
    updateTicket,
    deleteTicket,
};