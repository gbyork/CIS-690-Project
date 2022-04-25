let passport = require('passport');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res,next) {
    res.render('./login/index', { message: req.flash('loginMessage') });
});



router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});



router.post('/', passport.authenticate('local-login', {
    successRedirect: '/', //redirect to the home page
    failureRedirect: '/login', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}));

module.exports = router;