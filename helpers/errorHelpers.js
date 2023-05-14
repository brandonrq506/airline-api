const createError = (status, message, logMessage = null) => {
    const error = new Error(message);
    error.status = status;
    error.logMessage = logMessage;
    return error;
}

export default createError;