const axios = require('axios')

module.exports = {
    list: async () => {
        const characters = await axios.get('http://db:7004/Character')
        return characters.data
    },

    getById: async (id) => {
        const character = await axios.get(`http://db:7004/Character/${id}`)
        return character.data
    },

    create: async (dataBody) => {
        const newCharacter = await axios.post('http://db:7004/Character', dataBody)
        return newCharacter.data
    }
}
