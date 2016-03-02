var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;
var ReactApp = require('../components/reactApp');
var Essai = require('../components/essai');
var HomePage = require('../components/homepage');
var Layout = require('../components/layout');

module.exports = (
  <Route path='/' component={Layout}>  
    <Route path="app" component={ReactApp} />
    <Route path="essai" component={Essai} />    
    <IndexRoute component={HomePage} />
  </Route>  
);