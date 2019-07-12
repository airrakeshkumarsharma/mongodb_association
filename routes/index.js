var express = require('express');
var router = express.Router();
const user = require('../controllers/users.controller')

router.post('/user', user.add);
router.get('/user', user.list)


module.exports = router;
