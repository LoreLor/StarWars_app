const Characters = require('../data')
const { response } = require('../utils')

module.exports = async (req, res) => {
    const result = await Characters.list()
    response(res, 200, result.data)
}
