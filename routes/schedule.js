import express from "express";
import verifyJwt from '../middleware/verifyJwt.js';
import verifyRoles from '../middleware/verifyRoles.js';
import ROLES_LIST from '../config/roles_list.js'

import { getSchedules, getScheduleById, addSchedule, updateSchedule, deleteSchedule } from "../controllers/schedule.js";

const router = express.Router();
const { Admin, Editor } = ROLES_LIST;

router.get("/", getSchedules);
router.get("/:id", getScheduleById);

router.use(verifyJwt);

router.post("/", verifyRoles(Admin), addSchedule);
router.put("/:id", verifyRoles(Admin, Editor), updateSchedule);
router.delete("/:id", verifyRoles(Admin), deleteSchedule);

export default router;