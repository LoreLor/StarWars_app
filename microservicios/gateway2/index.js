const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware')
require('dotenv').config()


const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.use('/characters', createProxyMiddleware({
    target: 'http://characters:7001',
    changeOrigin: true
}))

app.use('/films', createProxyMiddleware({
    target: 'http://films:7002',
    changeOrigin: true
}))

app.use('/planets', createProxyMiddleware({
    target: 'http://planets:7003',
    changeOrigin: true
}))


app.listen(PORT, () => {
    console.log(`GATEWAY on port ${PORT}`)
})