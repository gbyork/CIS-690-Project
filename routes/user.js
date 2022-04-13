var express = require('express');
var router = express.Router();

const userscontroller = require('../controllers/userscontroller');


router.get('/', userscontroller.get_users);

router.get('/create', userscontroller.get_create_users);
router.post('/create', userscontroller.post_users)

router.get('/update', userscontroller.get_update_user);
router.post('/update', userscontroller.post_update_user);

router.get('/completed', userscontroller.get_completed);

router.get('/delete', userscontroller.delete_user);

module.exports = router;