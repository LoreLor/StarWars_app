const allModels = require('../models');
const response = require('../utils/response');

module.exports = async(req, res) => {
    const { model } = req.params;
    
    const result = await allModels[model].list();
    response(res, 200, result);
}