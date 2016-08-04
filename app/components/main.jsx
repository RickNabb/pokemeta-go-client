/**
* main.jsx
* (C) Yes And Games 2016
* Nick Rabb (nrabb@outlook.com)
* The ReactJS main file to be populated with components with WebPack
*/

var React = require('react');
var ReactDOM = require('react-dom');
var Login = require('./login.jsx');

ReactDOM.render(
  <Login />,
  document.getElementById('content')
);
