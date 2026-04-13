const successResponse = (res, statusCode, message, data) => {
    return res.status(statusCode).json({
        status: 'success',
        message: message,
        data: data
    });
}

module.exports = { 
    successResponse
};