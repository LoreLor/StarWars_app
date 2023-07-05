const axios = require('axios')

const Characters = axios.get('http://db:7004/Character')
const { response } = require('../utils')

module.exports = async (req, res) => {
    const characters = await Characters.list()
    response(res, 200, characters)
}
