import Schedule from "../models/Schedule.js";
import Route from "../models/Route.js";

const getSchedules = async () => {
    try {
        const schedules = await Schedule.find().exec();
        return schedules;
    } catch (error) {
        throw error;
    }
};

const getScheduleById = async (id) => {
    try {
        const schedule = await Schedule.findById(id).exec();
        return schedule;
    } catch (error) {
        throw error;
    }
};

const getScheduleByRouteId = async (id) => {
    try {
        const schedule = await Schedule.find({ route: id }).exec();
        return schedule;
    } catch (error) {
        throw error;
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
        throw error;
    }
};

const updateSchedule = async (id, schedule) => {
    try {
        const newSchedule = await Schedule.findByIdAndUpdate(id, schedule,
            {
                new: true,
                runValidators: true
            }
        ).exec();
        return newSchedule;
    } catch (error) {
        throw error;
    }
};

const deleteSchedule = async (id) => {
    try {
        const schedule = await Schedule.findByIdAndDelete(id).exec();
        return schedule;
    } catch (error) {
        throw error;
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