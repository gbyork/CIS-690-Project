var express = require('express');
var router = express.Router();
const authMiddleware = require('../middleware/authenticate');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./dashboard/index');
});

module.exports = router;