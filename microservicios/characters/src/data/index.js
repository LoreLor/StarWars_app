const characters = require('./characters')

module.exports = {
    list: async () => {
        return characters
    },
    create: async () => {
        throw new Error('Character not found')
    }
}
