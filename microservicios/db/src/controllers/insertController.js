const allModels = require('../models');

module.exports = async(req, res) => {
    const { model } = req.params;
    const item = req.body;

    const result = await allModels[model].insert(item);
    res.status(201).send(result)

}