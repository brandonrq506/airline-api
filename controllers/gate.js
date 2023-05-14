import gateService from '../services/gate.js';
import createError from '../helpers/errorHelpers.js';
import asyncHandler from '../middleware/asyncHandler.js';

export const getGates = asyncHandler(async (req, res, next) => {
    const gates = await gateService.getGates();
    res.status(200).json(gates);
});

export const getGate = asyncHandler(async (req, res, next) => {
    const gateId = req.params.id;
    const gate = await gateService.getGate(gateId);

    if (!gate)
        return next(createError(404, `Gate not found`));

    res.status(200).json(gate);
});

export const createGate = asyncHandler(async (req, res, next) => {
    const gate = req.body;
    const newGate = await gateService.createGate(gate);

    if (!newGate)
        return next(createError(400, `Gate could not be created`));

    res.status(201).json(newGate);
});

export const updateGate = asyncHandler(async (req, res, next) => {
    const gateId = req.params.id;
    const gate = req.body;
    const updatedGate = await gateService.updateGate(gateId, gate);

    if (!updatedGate)
        return next(createError(404, `Gate not found`));

    res.status(200).json(updatedGate);
});

export const deleteGate = asyncHandler(async (req, res, next) => {
    const gateId = req.params.id;
    const deletedGate = await gateService.deleteGate(gateId);

    if (!deletedGate)
        return next(createError(404, `Gate not found`));

    res.sendStatus(204);
});