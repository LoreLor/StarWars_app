const { Router } = require('express');
const controllers = require('../controllers');
const middleware = require('../middleware');

const router = Router();

router.get('/:model', middleware.modelsValidation, controllers.listController);
router.get('/:model/:_id', middleware.modelsValidation, controllers.getIdController);
router.post('/:model', middleware.modelsValidation, controllers.insertController);

module.exports = router;