const Planet = require('../data')
const { response } = require('../utils')

module.exports = async (req, res) => {
    const { id } = req.params

    const result = await Planet.getById(id)
    response(res, 200, result.data)
}
