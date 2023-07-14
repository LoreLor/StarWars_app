const Characters = require('../data')
const { response } = require('../utils')

module.exports = async (req, res) => {
    const character = await Characters.getById()
    response(res, 200, character)
}
