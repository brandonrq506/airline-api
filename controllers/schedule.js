import scheduleService from "../services/schedule.js";
import asyncHandler from '../middleware/asyncHandler.js';
import createError from '../helpers/errorHelpers.js';

export const getSchedules = asyncHandler(async (req, res, next) => {
    const schedules = await scheduleService.getSchedules();
    res.status(200).json(schedules);
});

export const getScheduleById = asyncHandler(async (req, res, next) => {
    const scheduleId = req.params.id;
    const schedule = await scheduleService.getScheduleById(scheduleId);

    if (!schedule)
        return next(createError(404, `Schedule not found with id ${scheduleId}`));

    res.status(200).json(schedule);
});

export const getScheduleByRouteId = asyncHandler(async (req, res, next) => {
    const routeId = req.params.id;
    const schedule = await scheduleService.getScheduleByRouteId(routeId);

    if (!schedule)
        return next(createError(404, `Schedule not found with route id ${routeId}`));

    res.status(200).json(schedule);
});

export const addSchedule = asyncHandler(async (req, res, next) => {
    const schedule = req.body;
    const newSchedule = await scheduleService.addSchedule(schedule);

    if (!newSchedule)
        return next(createError(400, `Unable to create schedule`));

    res.status(201).json(newSchedule);
});

export const updateSchedule = asyncHandler(async (req, res, next) => {
    const scheduleId = req.params.id;
    const schedule = req.body;
    const updatedSchedule = await scheduleService.updateSchedule(scheduleId, schedule);

    if (!updatedSchedule)
        return next(createError(404, `Schedule not found with id ${scheduleId}`));

    res.status(200).json(updatedSchedule);
});

export const deleteSchedule = asyncHandler(async (req, res, next) => {
    const scheduleId = req.params.id;
    const deletedSchedule = await scheduleService.deleteSchedule(scheduleId);

    if (!deletedSchedule)
        return next(createError(404, `Schedule not found with id ${scheduleId}`));

    res.sendStatus(204);
});