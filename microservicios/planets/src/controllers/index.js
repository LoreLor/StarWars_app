const { catchedAsync } = require('../utils')

module.exports = {
    getPlanets: catchedAsync(require('./getPlanets')),
    getPlanetById: catchedAsync(require('./getPlanetById')),
    postPlanets: catchedAsync(require('./postPlanets'))
}
