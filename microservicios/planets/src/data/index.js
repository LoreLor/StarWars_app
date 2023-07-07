const axios = require('axios')

module.exports = {
    list: async () => {
        return await axios.get('http://localhost:7004/Planet')
    },
    getById: async (_id) => {
        return await axios.get(`http://localhost:7004/Planet/${_id}`)
    },
    create: async (body) => {
        return await axios.post('http://localhost:7004/Planet', body)
        // throw new Error('Ocurred some error with your post')
    }
}
