/**
* login.jsx
* (C) Yes And Games 2016
* Nick Rabb (nrabb@outlook.com)
* The ReactJS components that are used for the login page
*/

var React = require('react');

var Title = React.createClass({
  render: function () {
    'use strict';
    return (
      <div class="row">
        <div class="small-10 small-offset-1">
          <h1 id="logo" class="center pokemon-solid pokemon-colors" style="font-size: 60px;">PoKeDeX <span>GO</span></h1>
        </div>
      </div>
    );
  }
});

var BodyLogin = React.createClass({
  render: function () {
    'use strict';
    return (
      <div class="bg-off-black">
        <div class="row space-xl"></div>
        <div class="row">
          <div class="small-10 small-offset-1">
            <div class="center">
              <h3>Sign in with</h3>
            </div>
          </div>
        </div>
        <div class="row space-xs">
        </div>
        <div class="row">
          <div class="small-10 small-offset-1">
            <div class="center">
              <a class="button bg-light" style="width: 80%"><h3 class="fg-off-black">GOOGLE</h3></a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="small-10 small-offset-1">
            <div class="center">
              <a class="button bg-gold" style="width:80%;"><h3>POKEMON TRAINER CLUB</h3></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

var Footer = React.createClass({
  render: function () {
    'use strict';
    return (
      <div class="footer">
        <div class="row space-md"></div>
        <div class="row">
          <div class="small-12 columns">
            <p>(C) 2016 Nick Rabb
            <br/>All rights reserved to Niantic Inc., Pokemon
            <br/>& Nintendo / Creatures Inc. / GAME FREAK Inc.</p>
          </div>
        </div>
      </div>
    );
  }
});

var Login = React.createClass({
  render: function () {
    'use strict';
    return (
      <div id="login-screen">
        <Title />
        <BodyLogin />
        <div class="row space-sm"></div>
        <Footer />
      </div>
    );
  }
});

module.exports = Login;
