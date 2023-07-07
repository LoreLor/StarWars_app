const axios = require('axios')

module.exports = {
    list: async () => {
        return await axios.get('http://db:7004/Planet')
    },
    getById: async (id) => {
        return await axios.get(`http://db:7004/Planet/${id}`)
    },
    create: async (dataBody) => {
        return await axios.post('http://db:7004/Planet', dataBody)
        // throw new Error('Ocurred some error with your post')
    }
}
