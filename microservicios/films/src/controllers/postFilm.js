const Films = require('../data')
const { response } = require('../utils')

module.exports = async (req, res) => {
    const dataBody = req.body

    const newFilm = await Films.create(dataBody)
    response(res, 201, newFilm)
}
