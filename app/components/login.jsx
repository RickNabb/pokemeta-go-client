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
      <div className="row">
        <div className="small-10 small-offset-1">
          <h1 id="logo" className="center pokemon-solid pokemon-colors" style={{fontSize: '60px'}}>PoKeDeX <span>GO</span></h1>
        </div>
      </div>
    );
  }
});

var BodyLogin = React.createClass({
  render: function () {
    'use strict';
    return (
      <div className="bg-off-black">
        <div className="row space-xl"></div>
        <div className="row">
          <div className="small-10 small-offset-1">
            <div className="center">
              <h3>Sign in with</h3>
            </div>
          </div>
        </div>
        <div className="row space-xs">
        </div>
        <div className="row">
          <div className="small-10 small-offset-1">
            <div className="center">
              <a className="button bg-light" style={{width: '80%'}}><h3 className="fg-off-black">GOOGLE</h3></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="small-10 small-offset-1">
            <div className="center">
              <a className="button bg-gold" style={{width: '80%'}}><h3>POKEMON TRAINER CLUB</h3></a>
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
      <div className="footer">
        <div className="row space-md"></div>
        <div className="row">
          <div className="small-12 columns">
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
        <div className="row"></div>
        <Footer />
      </div>
    );
  }
});

module.exports = Login;
