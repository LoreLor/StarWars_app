const { catchedAsync } = require('../utils')

module.exports = {
    getPlanets: catchedAsync(require('./getPlanets')),
    postPlanets: catchedAsync(require('./postPlanets'))
}
