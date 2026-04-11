const successResponse = (res, statusCode, message, data) => {
    return res.status(statusCode).json({
        status: 'success',
        message: message,
        data: data
    });
}

const errorResponse = (res, statusCode, message) => {
    return res.status(statusCode).json({
        status: 'error',
        message: message,
    })
};

module.exports = { 
    successResponse,
    errorResponse
};