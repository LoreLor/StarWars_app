const Characters = require('../data')
const { response } = require('../utils')

module.exports = async (req, res, next) => {
    const dataBody = req.body

    const newCharacter = await Characters.create(dataBody)
    response(res, 201, newCharacter.data)
}
