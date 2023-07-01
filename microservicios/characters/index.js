const server = require('./src/server')
const PORT = 7001

server.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})
