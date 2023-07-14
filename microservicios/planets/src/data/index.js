const axios = require('axios')

module.exports = {
    list: async () => {
        const planets = await axios.get('http://db:7004/Planet')
        return planets.data
    },
    getById: async (id) => {
        const planet = await axios.get(`http://db:7004/Planet/${id}`)
        return planet.data
    },
    create: async () => {
        // eslint-disable-next-line no-undef
        const dataBody = req.body
        const newPlanet = await axios.post('http://db:7004/Planet', dataBody)
        return newPlanet.data
        // throw new Error('Ocurred some error with your post')
    }
}
