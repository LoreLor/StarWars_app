const { Router } = require('express')
const controllers = require('../controllers')
const middleware = require('../middleware')
const router = Router()

router.get('/', controllers.getFilms)
router.get('/:id', controllers.getFilmById)
router.post('/', middleware.filmValidation, controllers.postFilm)

module.exports = router
