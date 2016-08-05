/**
* home.jsx
* (C) Yes And Games 2016
* Nick Rabb (nrabb@outlook.com)
* The ReactJS components that are used for the home page
*/

var React = require('react');

var SquadInfo = React.createClass({
  render: function () {
    'use strict';
    return (
      <div id="squad-info">
        <div className="row">
          <div className="columns">
            <h1>Squad Status</h1>
          </div>
        </div>
        <div className="row offset-xs">
          <div className="columns">
            <p>You do not belong to a squad!</p>
            <a href="#" className="button bg-gold"><i className="fi-magnifying-glass"></i>Search</a>
          </div>
        </div>
      </div>
    );
  }
});

var FriendInfo = React.createClass({
  render: function () {
    'use strict';
    return (
      <div id="friend-info">
        <div className="row">
          <div className="columns">
            <h1>Friends</h1>
          </div>
        </div>
        <div className="row offset-xs">
          <div className="columns">
            <p>You have no friends! (in your list)</p>
            <a href="#" className="button bg-gold"><i className="fi-plus"></i>Add a friend</a>
          </div>
        </div>
      </div>
    );
  }
});

var TradeInfo = React.createClass({
  render: function () {
    'use strict';
    return (
      <div id="trade-info">
        <div className="row">
          <div className="columns">
            <h1>Trades</h1>
          </div>
        </div>
        <div className="row offset-xs">
          <div className="columns">
            <p>You have no pending trades.</p>
            <a href="#" className="button bg-gold"><i className="fi-plus"></i>Start a Trade</a>
          </div>
        </div>
      </div>
    );
  }
});

var BottomMenuButton = React.createClass({
//  constructor: function () {
////    super();
//    this.state = {
//      open: false
//    };
//    this.handleClick = this.handleClick.bind(this);
//  },
  handleClick: function () {
//    this.setState({open: !this.state.open});
    anim8('menu-btn', 'stretch-to-width', 1000, toggleBottomMenu);
  },
  render: function () {
    'use strict';
    return (
      <a href="#">
        <div id="menu-btn" className="center circle bg-light width-lg height-lg"></div>
      </a>
    )
  }
});

var BottomMenu = React.createClass({
  render: function () {
    'use strict';
    return (
      <div className="bottom-menu ease-in-out">
      <div className="row offset-xs">
        <div className="columns small-3">
            <h3>RickNabb</h3>
            <h4>Level 15</h4>
        </div>
        <div className="columns small-3 small-offset-1 left">
          <BottomMenuButton />
        </div>
        <div className="columns small-3 center">
          <h1>2<i className="fi-marker right"></i></h1>
        </div>
      </div>
      <div id="bottom-menu-icons" style={{display: 'none'}}>
        <div className="row">
          <div className="columns small-3 small-offset-1 center">
            <h1><i className="fi-torso circle-icon ease-in-out fg-off-black"></i></h1>
          </div>
          <div className="columns small-3 center left">
            <h1><i className="fi-home ease-in-out circle-icon fg-off-black"></i></h1>
          </div>
        </div>
      </div>
    </div>
    );
  }
});

var Home = React.createClass({
  render: function () {
    'use strict';
    return (
      <div id="Home">
        <div className="row space-sm"></div>
        <div className="bg-off-black">
          <div className="row space-xs"></div>
          <SquadInfo />
          <hr />
          <FriendInfo />
          <hr />
          <TradeInfo />
          <div className="row space-md"></div>
        </div>
        <BottomMenu />
      </div>
    );
  }
});

module.exports = Home;
