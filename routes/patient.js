var express = require('express');
var router = express.Router();

const patientcontroller = require('../controllers/patientcontroller');


router.get('/', patientcontroller.get_patient);

router.get('/create', patientcontroller.get_create_patient);
router.post('/create', patientcontroller.post_patient);

router.get('/update', patientcontroller.get_update_patient);
router.post('/update', patientcontroller.post_update_patient);

router.get('/completed', patientcontroller.get_completed);

router.get('/delete', patientcontroller.delete_patient);

module.exports = router;