const { catchedAsync } = require('../utils')

module.exports = {
    getCharacters: catchedAsync(require('./getCharacters')),
    getCharactersById: catchedAsync(require('./getCharactersById')),
    postCharacters: catchedAsync(require('./postCharacters'))
}
