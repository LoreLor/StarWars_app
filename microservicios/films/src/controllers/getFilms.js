const axios = require('axios')

const Films = axios.get('http://db:7004/Film')
const { response } = require('../utils')

module.exports = async (req, res) => {
    const films = await Films.list()
    response(res, 200, films)
}
