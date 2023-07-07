const { Router } = require('express')
const controllers = require('../controllers')
const middleware = require('../middleware')

const router = Router()

router.get('/', controllers.getPlanets)
router.get('/:id', controllers.getPlanetById)
router.post('/', middleware.planetValidation, controllers.postPlanets)

module.exports = router
