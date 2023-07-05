const { ClientError } = require('../utils')

module.exports = (req, res, next) => {
    const { model } = req.params
    if (model) return next()
    else throw new ClientError('Model not Found', 404)
}