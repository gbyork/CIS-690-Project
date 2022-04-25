var express = require('express');
var router = express.Router();
const authMiddleware = require('../middleware/authenticate');
const patientcontroller = require('../controllers/patientcontroller');


router.get('/',authMiddleware.ensureIsAdmin, patientcontroller.get_patient);

router.get('/create',authMiddleware.ensureIsAdmin, patientcontroller.get_create_patient);
router.post('/create',authMiddleware.ensureIsAdmin, patientcontroller.post_patient);

router.get('/update',authMiddleware.ensureIsAdmin, patientcontroller.get_update_patient);
router.post('/update',authMiddleware.ensureIsAdmin, patientcontroller.post_update_patient);

router.get('/completed',authMiddleware.ensureIsAdmin, patientcontroller.get_completed);

router.get('/delete',authMiddleware.ensureIsAdmin, patientcontroller.delete_patient);

module.exports = router;