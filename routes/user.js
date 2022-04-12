var express = require('express');
var router = express.Router();

const userscontroller = require('../controllers/userscontroller');


router.get('/', userscontroller.get_users);

router.get('/create', userscontroller.get_create_users);
router.post('/create', userscontroller.post_users)


module.exports = router;