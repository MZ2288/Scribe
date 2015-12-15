var React = require('react');

var Splash = React.createClass({
  render: function () {
    return (
      <div className="splash-container">
        <h1>Scribe</h1>
        <span>Welcome to Scribe! An Evernote inspired web app built using
        Ruby on Rails and React.js</span>

        <ul>
           <li><a href="https://github.com/MZ2288/Scribe"><span className="underline">Github</span></a></li>
           <li><a href="/session/new"><span className="underline">Sign In</span></a></li>
           <li><a href="/users/new"><span className="underline">Sign Up</span></a></li>
         </ul>
      </div>
    );
  }
});

module.exports = Splash;
