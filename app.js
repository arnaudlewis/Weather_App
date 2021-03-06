'use strict';

require('babel-register')({
  presets: ['react', 'es2015'],
});

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ReactEngine = require('react-engine');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/weatherapp');

// JSX transpiler
require('node-jsx').install();

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
/*app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');*/
var reactRoutesFilePath = path.join(__dirname + '/views/app/config/routes.jsx');

var engine = ReactEngine.server.create({
  routes: require(reactRoutesFilePath),
  routesFilePath: reactRoutesFilePath,
});

// set the engine
app.engine('.jsx', engine);

// set the view directory
app.set('views', path.join(__dirname, '/app/components'));

// set jsx as the view engine
app.set('view engine', 'jsx');

// finally, set the custom view
app.set('view', ReactEngine.expressView);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
