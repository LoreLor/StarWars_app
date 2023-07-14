const { catchedAsync } = require('../utils');

module.exports = {
    listController: catchedAsync(require('./listController')),
    getIdController: catchedAsync(require('./getIdController')),
    insertController: catchedAsync(require('./insertController')),
}