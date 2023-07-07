const axios = require('axios')

module.exports = {
    list: async () => {
        return await axios.get('http://localhost:7004/Character')
    },

    getById: async (_id) => {
        return await axios.get(`http://localhost:7004/Character/${_id}`)
    },

    create: async (body) => {
        return await axios.post('http://localhost:7004/Character', body)
        // throw new Error('Character not found')
    }
}
