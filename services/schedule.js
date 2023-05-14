import Schedule from "../models/Schedule.js";
import Route from "../models/Route.js";
import createError from '../helpers/errorHelpers.js';

const getSchedules = async () => {
    try {
        const schedules = await Schedule.find().lean().exec();
        return schedules;
    } catch (error) {
        throw createError(500, `Error getting schedules `, error.message);
    }
};

const getScheduleById = async (id) => {
    try {
        const schedule = await Schedule.findById(id).lean().exec();
        return schedule;
    } catch (error) {
        throw createError(500, `Error getting scheduleId: ${id}`, error.message);
    }
};

const getScheduleByRouteId = async (id) => {
    try {
        const schedule = await Schedule.find({ route: id }).lean().exec();
        return schedule;
    } catch (error) {
        throw createError(500, `Error getting schedule by routeId: ${id}`, error.message);
    }
};

//Pull duration from Route so we can calculate arrival time using departure time
//DurationMili: Needed to create a new Date object.
const addSchedule = async (schedule) => {
    try {
        const duration = await Route
            .findById(schedule.route)
            .select("duration")
            .exec();

        const durationMili = duration.duration * 60 * 1000;
        const departure = new Date(schedule.departure);
        const arrival = new Date(departure.getTime() + durationMili);
        const newSchedule = await Schedule.create({
            ...schedule,
            arrival
        });

        return newSchedule;
    } catch (error) {
        throw createError(500, `Error adding schedule`, error.message);
    }
};

const updateSchedule = async (id, schedule) => {
    try {
        const newSchedule = await Schedule.findByIdAndUpdate(id, schedule,
            {
                new: true,
                runValidators: true
            }
        ).lean().exec();
        return newSchedule;
    } catch (error) {
        throw createError(500, `Error updating schedule`, error.message);
    }
};

const deleteSchedule = async (id) => {
    try {
        const schedule = await Schedule.findByIdAndDelete(id).lean().exec();
        return schedule;
    } catch (error) {
        throw createError(500, `Error deleting schedule`, error.message);
    }
};

export default {
    getSchedules,
    getScheduleById,
    getScheduleByRouteId,
    addSchedule,
    updateSchedule,
    deleteSchedule
};