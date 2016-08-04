/**
* main.jsx
* (C) Yes And Games 2016
* Nick Rabb (nrabb@outlook.com)
* The ReactJS main file to be populated with components with WebPack
*/

var React = require('react');

var Login = require('./login');

React.render(
  <Login />,
  document.getElementById('content')
);
