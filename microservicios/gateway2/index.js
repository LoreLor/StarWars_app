const express = require('express')
const morgan = require('morgan')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()
const PORT = 7000

app.use(express.json())
app.use(morgan('dev'))

app.use('/characters', createProxyMiddleware({
    target: 'http://characters:7001',
    changeOrigin: true
}))

app.use('/films', createProxyMiddleware({
    target: 'http://films:7002',
    changeOrigin: true
}))

app.use('/characters', createProxyMiddleware({
    target: 'http://planets:7003',
    changeOrigin: true
}))

app.use('/db', createProxyMiddleware)({
    target: 'http://db:7004',
    changeOrigin: true
})

app.listen(PORT, () => {
    console.log(`GATEWAY2 on port ${PORT}`)
})