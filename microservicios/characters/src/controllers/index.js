const { catchedAsync } = require('../utils')

module.exports = {
    getCharacters: catchedAsync(require('./getCharacters')),
    postCharacters: catchedAsync(require('./postCharacters'))
}
