var express = require('express');
var router = express.Router();
const authMiddleware = require('../middleware/authenticate');
const patientcontroller = require('../controllers/patientcontroller');


router.get('/',authMiddleware.ensureAuthenticated, patientcontroller.get_patient);

router.get('/create',authMiddleware.ensureAuthenticated, patientcontroller.get_create_patient);
router.post('/create',authMiddleware.ensureAuthenticated, patientcontroller.post_patient);

router.get('/update',authMiddleware.ensureAuthenticated, patientcontroller.get_update_patient);
router.post('/update',authMiddleware.ensureAuthenticated, patientcontroller.post_update_patient);

router.get('/completed',authMiddleware.ensureAuthenticated, patientcontroller.get_completed);

router.get('/delete',authMiddleware.ensureAuthenticated, patientcontroller.delete_patient);

module.exports = router;