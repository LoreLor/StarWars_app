const axios = require('axios')

const Films = axios.post('http://db:7004/Film')
const { response } = require('../utils')

module.exports = async (req, res) => {
    const newFilm = await Films.create()
    response(res, 201, newFilm)
}
