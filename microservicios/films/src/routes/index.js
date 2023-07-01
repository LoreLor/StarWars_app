const { Router } = require('express')
const controllers = require('../controllers')
const middleware = require('../middleware')
const router = Router()

router.get('/', controllers.getFilms)
router.post('/', middleware.characterValidation, controllers.postFilm)

module.exports = router
