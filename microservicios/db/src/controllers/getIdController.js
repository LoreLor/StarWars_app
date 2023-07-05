const allModels = require('../models');
const response = require('../utils/response');

module.exports = async(req, res) => {
    const { model, _id } = req.params;

    const result = await allModels[model].getId(_id);
    response(res, 200, result)
}