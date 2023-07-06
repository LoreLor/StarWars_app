const axios = require('axios')
const { response } = require('../utils')

module.exports = async (req, res) => {
    const result = await axios.get('http://db:7004/Film')
    response(res, 200, result.data)
}
