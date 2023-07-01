const server = require('./src/server')
const PORT = 7003

server.listen(PORT, () => {
    console.log(`listen on port ${PORT}`)
})
