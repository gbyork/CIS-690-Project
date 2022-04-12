var express = require('express');
var router = express.Router();

const patientcontroller = require('../controllers/patientcontroller');


router.get('/', patientcontroller.get_patient);

router.get('/create', patientcontroller.get_create_patient);
router.post('/create', patientcontroller.post_patient)


module.exports = router;