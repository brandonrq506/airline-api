import express from 'express';
import { login, register, refresh, logout } from '../controllers/session.js';
const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.get('/refresh', refresh);

router.get('/logout', logout);

export default router;