const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./src/config/database');

connectDB().then(() => {
    console.log("Berhasil 🔥");
}).catch(() => {
    console.error(err);
});

const routes = require('./src/api/routes');

const app = express();

app.use(bodyParser.json());

app.use('/api', routes());

app.use((error, request, response, next) =>
    response.status(error.statusCode || 500).json({
    statusCode: error.statusCode || 500,
    error: error.code || 'UNKNOWN_ERROR',
    description: error.description || 'Unknown error',
    message: error.message || 'An error has occurred',
    })
);

module.exports = app;