import Ticket from '../models/Ticket.js';
import routeService from '../services/route.js';

const getTickets = async () => {
    try {
        const tickets = await Ticket.find().lean().exec();
        return tickets;
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const getTicketById = async (ticketId) => {
    try {
        const ticket = await Ticket.findById(ticketId)
            .populate('customer')
            .populate('route')
            .populate('schedule')
            .select('-route')
            .exec();

        ticket.route.fares = undefined;
        return ticket;
    } catch (error) {
        throw error;
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
        return new Error(error.message);
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
        throw error;
    }
};

const deleteTicket = async (ticketId) => {
    try {
        const delTicket = await Ticket.findByIdAndDelete(ticketId).lean().exec();
        return delTicket;
    } catch (error) {
        throw error;
    }
};

export default {
    getTickets,
    getTicketById,
    createTicket,
    updateTicket,
    deleteTicket,
};