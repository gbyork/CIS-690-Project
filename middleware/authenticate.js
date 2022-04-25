function ensureAuthenticated(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/login');
}

function ensureIsAdmin(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated() && res.locals.user.Role === 'Admin')
        return next();

    // if they aren't redirect them to the home page
    if (req.isAuthenticated()) {
        res.status(401);
        res.send('You are not authorized to access this page' + res.locals.user.Role);
    } else {
        res.redirect('/login');
    }
}

function ensureIsAdminOrQualityControl(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated() && (res.locals.user.Role === 'Admin' || res.locals.user.Role === 'Quality Control'))
        return next();

    // if they aren't redirect them to the home page
    if (req.isAuthenticated) {
        res.status(401);
        res.send('You are not authorized to access this page');
    } else {
        res.redirect('/login');
    }
}

module.exports = {
    ensureAuthenticated: ensureAuthenticated,
    ensureIsAdmin: ensureIsAdmin,
    ensureIsAdminOrQualityControl: ensureIsAdminOrQualityControl
}