const allModels = require('../models');

module.exports = async(req, res) => {
    const { model } = req.params;
    
    const result = await allModels[model].list();
    res.status(200).send(result)
}