import rateLimit from 'express-rate-limit';

const MINUTES = 20;

export const sessionLimiter = rateLimit({
    windowMs: MINUTES * 60 * 1000,
    max: 15,
    message: 'Too many attempts from this IP, please try again after ' + MINUTES + ' minutes'
});