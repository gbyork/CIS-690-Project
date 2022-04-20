var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var dashboardRouter = require('./routes/dashboard');
var statusRouter = require('./routes/status');
var accountRouter = require('./routes/account');
var userRouter = require('./routes/user');
var patientRouter = require('./routes/patient');

var passport = require('passport');
var flash = require('connect-flash');
var bodyParser = require('body-parser');

var app = express();
require('dotenv').config({ path: __dirname + '/.env' })
mongoose.connect(process.env['CONNECTION_STRING'], { useNewUrlParser: true, useUnifiedTopology: true });

//New Stuff Added
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());
var session = require('express-session');

require('./config/passport')(passport);

// required for passport
app.use(session({
  secret: 'devkey',
  resave: true,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/dashboard', dashboardRouter);
app.use('/status', statusRouter);
app.use('/account', accountRouter);
app.use('/user', userRouter);
app.use('/patient',patientRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
