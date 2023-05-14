import ticketService from '../services/ticket.js';
import asyncHandler from '../middleware/asyncHandler.js';
import createError from '../helpers/errorHelpers.js';

export const getTickets = asyncHandler(async (req, res, next) => {
    const tickets = await ticketService.getTickets();
    res.status(200).json(tickets);
});

export const getTicketById = asyncHandler(async (req, res, next) => {
    const ticketId = req.params.id;
    const ticket = await ticketService.getTicketById(ticketId);
    if (!ticket) {
        return next(createError(`Ticket not found with id of ${ticketId}`, 404));
    }
    res.status(200).json(ticket);
});

export const createTicket = asyncHandler(async (req, res, next) => {
    const ticket = req.body;
    const newTicket = await ticketService.createTicket(ticket);

    if (!newTicket)
        return next(createError(`Could not create ticket`, 400));

    res.status(201).json(newTicket);
});

export const updateTicket = asyncHandler(async (req, res, next) => {
    const ticketId = req.params.id;
    const ticket = req.body;
    const updTicket = await ticketService.updateTicket(ticketId, ticket);

    if (!updTicket)
        return next(createError(`Could not update ticket`, 400));

    res.status(200).json(updTicket);
});

export const deleteTicket = asyncHandler(async (req, res, next) => {
    const ticketId = req.params.id;
    const delTicket = await ticketService.deleteTicket(ticketId);

    if (!delTicket)
        return next(createError(`Could not delete ticket`, 400));

    res.sendStatus(204);
});