const characters = require('./characters.json')

module.exports = {
    list: async () => {
        return characters
    },
    create: async () => {
        throw new Error('Character not found')
    }
}
