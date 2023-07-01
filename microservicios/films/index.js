const server = require('./src/server')
const PORT = 7002

server.listen(PORT, () => {
    console.log(`listen on port: ${PORT}`)
})
