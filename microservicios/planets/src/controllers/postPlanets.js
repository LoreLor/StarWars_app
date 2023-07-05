const axios = require('axios')

const Planet = axios.post('http://db:7004/Planet')
const response = require('../utils')

module.exports = async (req, res) => {
    const newPlanet = await Planet.create()
    response(res, 201, newPlanet)
}
