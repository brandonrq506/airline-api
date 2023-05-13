import express from 'express';
import verifyJwt from '../middleware/verifyJwt.js';

import airlineAirportRoutes from './airline_airport.js'
import customerRoutes from './customer.js'
import scheduleRoutes from './schedule.js'
import sessionRoutes from './session.js'
import countryRoutes from './country.js'
import airportRoutes from './airport.js'
import airlineRoutes from './airline.js'
import routeRoutes from './route.js'
import gateRoutes from './gate.js';
import cardRoutes from './card.js'

const router = express.Router();

router.use('/auth', sessionRoutes);
router.use('/countries', countryRoutes);
router.use('/airports', airportRoutes);
router.use('/airlines', airlineRoutes);
router.use('/gates', gateRoutes);
router.use('/airline_airports', airlineAirportRoutes);
router.use('/routes', routeRoutes);
router.use('/schedules', scheduleRoutes);

router.use(verifyJwt);
router.use('/customers', customerRoutes);
router.use('/cards', cardRoutes);

export default router;