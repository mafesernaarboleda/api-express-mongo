/**
 * @author Maria Fernanda Serna
 * Hotel
 */

const Router = require('express').Router;
const controller = require('./hotel.controller');

const router = new Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/search/:filter', controller.find);

module.exports = router;
