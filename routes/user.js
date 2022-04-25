var express = require('express');
var router = express.Router();
const authMiddleware = require('../middleware/authenticate');

const userscontroller = require('../controllers/userscontroller');


router.get('/', authMiddleware.ensureIsAdmin, userscontroller.get_users);

router.get('/create', authMiddleware.ensureIsAdmin, userscontroller.get_create_users);
router.post('/create', authMiddleware.ensureIsAdmin, userscontroller.post_users)

router.get('/update', authMiddleware.ensureIsAdmin, userscontroller.get_update_user);
router.post('/update', authMiddleware.ensureIsAdmin, userscontroller.post_update_user);

router.get('/completed', authMiddleware.ensureIsAdmin, userscontroller.get_completed);

router.get('/delete', authMiddleware.ensureIsAdmin, userscontroller.delete_user);

module.exports = router;