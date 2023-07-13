const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const server = express()

server.use(express.json())
server.use(morgan('dev'))
server.use(cors())

server.use('/films', require('./routes'))

server.use((err, req, res, next) => {
    const status = res.statusCode || 500
    const message = err.message || err

    res.status(status).send({
        error: true,
        message
    })
})

module.exports = server
