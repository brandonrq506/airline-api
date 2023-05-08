//Source: https://thecodebarbarian.com/80-20-guide-to-express-error-handling

//We should import our logger here to use it in the error handler

const errorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Something went wrong';
    //Log the error here

    res.status(status).json({ message });
}

export default errorHandler;