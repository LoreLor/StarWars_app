const axios = require('axios')

const Planets = axios.get('http://db:7004/Planet')
const { response } = require('../utils')

module.exports = async (req, res) => {
    const planets = await Planets.list()
    response(res, 200, planets)
}
