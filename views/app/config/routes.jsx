var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;
var ReactApp = require('../components/reactApp.jsx');
var Essai = require('../components/essai.jsx');
var HomePage = require('../components/homepage.jsx');
var Layout = require('../components/layout.jsx');

module.exports = (
  <Route path='/' component={Layout}>
    <Route path="app" component={ReactApp} />
    <Route path="essai" component={Essai} />
    <IndexRoute component={HomePage} />
  </Route>
);