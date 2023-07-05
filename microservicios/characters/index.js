const server = require('./src/server')
const { PORT } = require('./src/config/envs')

server.listen(PORT, () => {
    console.log(`listening on port: ${PORT} -  TODO: dockerizar de nuevo`)
})
