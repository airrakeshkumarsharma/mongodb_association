var express = require('express');
var router = express.Router();
const badges = require('../controllers/badges.controller');

/* GET users listing. */
router.post('/', badges.add);

module.exports = router;
