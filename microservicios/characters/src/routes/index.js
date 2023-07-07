const { Router } = require('express')
const controllers = require('../controllers')
const middleware = require('../middleware')

const router = Router()

router.get('/', controllers.getCharacters)
router.get('/:id', controllers.getCharactersById)
router.post('/', middleware.characterValidation, controllers.postCharacters)

module.exports = router
