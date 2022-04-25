var express = require('express');
var router = express.Router();
const authMiddleware = require('../middleware/authenticate');
const status = require('../controllers/status');
/* GET home page. */
router.get('/', authMiddleware.ensureAuthenticated, status.get_status);



module.exports = router;