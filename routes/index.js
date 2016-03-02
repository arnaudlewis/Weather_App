var express = require('express');
var router = express.Router();
var React = require('react');
var ReactApp = React.createFactory(require('../views/app/components/reactApp'));
var Essai = React.createFactory(require('../views/app/components/essai'));

/* GET home page. */

router.get('/app', function(req, res, next) { 
  res.render(req.url,{'essai':'essai'})
});

router.get('/essai', function(req, res, next) { 
  res.render(req.url,{'tryout':'tryout'})
});

router.get('/', function(req, res, next) { 
  res.render(req.url,{'tryout22':'tryout22'})
});

module.exports = router;
