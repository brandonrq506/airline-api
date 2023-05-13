import express from "express";
import { getSchedules, getScheduleById, addSchedule, updateSchedule, deleteSchedule } from "../controllers/schedule.js";

const router = express.Router();

router.get("/", getSchedules);

router.get("/:id", getScheduleById);

router.post("/", addSchedule);

router.put("/:id", updateSchedule);

router.delete("/:id", deleteSchedule);

export default router;