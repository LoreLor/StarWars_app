const axios = require('axios')

module.exports = {
    list: async () => {
        const films = await axios.get('http://db:7004/Film')
        return films.data
    },

    getById: async (id) => {
        const film = await axios.get(`http://db:7004/Film/${id}`)
        return film.data
    },

    create: async (dataBody) => {
        const newFilm = await axios.post('http://db:7004/Film', dataBody)
        return newFilm.data
        // throw new Error('Film not found')
    }
}
