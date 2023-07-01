const planets = require('./planets.json')

module.exports = {
    list: async () => {
        return planets
    },
    create: async () => {
        throw new Error('Ocurred some error with your post')
    }
}
