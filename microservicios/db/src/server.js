const express = require('express');
const morgan = require('morgan');

const server = express();

server.use(express.json());
server.use(morgan('dev'));

server.use(require('./routes'));

server.use((err, req, res, next) => {
    const status = err.statusCode || 500;
    const message = err.message || err;

    res.status(status).json({
        error: true,
        message
    })
})


module.exports = server;