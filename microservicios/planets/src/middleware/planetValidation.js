const { ClientError } = require('../utils')

module.exports = (req, res, next) => {
    const { name } = req.body

    if (name) return next()
    else throw new ClientError('Error check your fields', 400)
}
