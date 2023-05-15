//Source: https://thecodebarbarian.com/80-20-guide-to-express-error-handling
import { logEvents } from './logger.js';

const errorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Something went wrong';
    console.error(err.logMessage || err.message); //Replace with proper logger.

    logEvents(`${req.method}\t${status}\t${req.url}\t${err.logMessage || err.message}`, 'errorLog.txt');
    res.status(status).json({ message });
}

export default errorHandler;