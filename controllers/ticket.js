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
        return next(createError(404, `Ticket not found with id of ${ticketId}`));
    }
    res.status(200).json(ticket);
});

export const getTicketsByCustomerId = asyncHandler(async (req, res, next) => {
    const customerId = req.params.id;
    const tickets = await ticketService.getTicketsByCustomerId(customerId);

    if (!tickets)
        return next(createError(404, `Could not find tickets for customer with id of ${customerId}`));

    res.status(200).json(tickets);
});

export const createTicket = asyncHandler(async (req, res, next) => {
    const ticket = req.body;
    const newTicket = await ticketService.createTicket(ticket);

    if (!newTicket)
        return next(createError(400, `Could not create ticket`));

    res.status(201).json(newTicket);
});

export const updateTicket = asyncHandler(async (req, res, next) => {
    const ticketId = req.params.id;
    const ticket = req.body;
    const updTicket = await ticketService.updateTicket(ticketId, ticket);

    if (!updTicket)
        return next(createError(404, `Could not update, ticket not found.`));

    res.status(200).json(updTicket);
});

export const deleteTicket = asyncHandler(async (req, res, next) => {
    const ticketId = req.params.id;
    const delTicket = await ticketService.deleteTicket(ticketId);

    if (!delTicket)
        return next(createError(404, `Could not delete, ticket not found`));

    res.sendStatus(204);
});