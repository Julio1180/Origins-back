const { checkToken } = require('../../helpers/middlewares');

const router = require('express').Router();


router.use('/clases', require('./clases.route'));
router.use('/usuarios', require('./usuarios.route'));
router.use('/spots', require('./spots.route'));

module.exports = router;