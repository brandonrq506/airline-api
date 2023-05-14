import express from "express";
import { addAirlineToRoute, deleteAirlineFromRoute } from "../controllers/airline_route.js";

const router = express.Router();

router.post("/", addAirlineToRoute);

router.delete("/:airlineId/:routeId", deleteAirlineFromRoute);

export default router;