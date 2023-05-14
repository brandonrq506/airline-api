//Source: https://thecodebarbarian.com/80-20-guide-to-express-error-handling

const errorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Something went wrong';
    console.error(err.logMessage || err.message); //Replace with proper logger.
    res.status(status).json({ message });
}

export default errorHandler;