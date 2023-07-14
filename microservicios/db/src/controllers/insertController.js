const allModels = require('../models');
const { response } = require('../utils');

module.exports = async(req, res) => {
    const { model } = req.params;
    const item = req.body;

    const result = await allModels[model].insert(item);
    response(res, 201, result);

}