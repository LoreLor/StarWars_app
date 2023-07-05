const axios = require('axios')

const Characters = axios.post('http://db:7004/Character')
const { response } = require('../utils')

module.exports = async (req, res, next) => {
    const newCharacter = await Characters.create()
    response(res, 201, newCharacter)
}
