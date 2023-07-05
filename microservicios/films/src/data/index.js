const films = require('./films')

module.exports = {
    list: async () => {
        return films
    },

    create: async () => {
        throw new Error('Film not found')
    }
}
