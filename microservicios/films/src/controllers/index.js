const { catchedAsync } = require('../utils')

module.exports = {
    getFilms: catchedAsync(require('./getFilms')),
    getFilmById: catchedAsync(require('./getFilmById')),
    postFilm: catchedAsync(require('./postFilm'))
}
