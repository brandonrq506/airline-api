import express from "express";
import verifyJwt from '../middleware/verifyJwt.js';
import verifyRoles from '../middleware/verifyRoles.js';
import ROLES_LIST from '../config/roles_list.js'

import { addAirlineToRoute, deleteAirlineFromRoute } from "../controllers/airline_route.js";

const router = express.Router();
const { Admin } = ROLES_LIST;

router.use(verifyJwt);
router.use(verifyRoles(Admin));

router.post("/", addAirlineToRoute);
router.delete("/:airlineId/:routeId", deleteAirlineFromRoute);

export default router;