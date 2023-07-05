const { ClientError } = require('../utils')

module.exports = (req, res, next) => {
    const { model } = req.params;

    if(["Character", "Film", "Planet"].includes(model)) {
        return next();
    } else {
        throw new ClientError("Model is Not Found", 404)
    }
}
