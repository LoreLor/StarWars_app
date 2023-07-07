const Planet = require('../data')
const { response } = require('../utils')

module.exports = async (req, res) => {
    const dataBody = req.body

    const newPlanet = await Planet.create(dataBody)
    response(res, 201, newPlanet.data)
}
