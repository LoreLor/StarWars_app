const axios = require('axios')

module.exports = {
    list: async () => {
        return await axios.get('http://db:7004/Film')
    },

    getById: async (_id) => {
        return await axios.get(`http://db:7004/Film/${_id}`)
    },

    create: async (body) => {
        return await axios.post('http://db:7004/Film', body)
        // throw new Error('Film not found')
    }
}
