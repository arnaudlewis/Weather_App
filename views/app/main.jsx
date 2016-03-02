var React = require('react');
var ReactDom = require('react-dom');
var Router = require('react-router').Router;
var routes = require('./config/routes.jsx');
var browserHistory = require('react-router').browserHistory;

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDom.render(
    React.createElement(Router, {history: browserHistory, routes: routes}), document.getElementById('react-main-mount')
  );
});