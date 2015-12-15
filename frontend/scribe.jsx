
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Splash = require('./components/splash');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Splash></Splash>
      </div>
    );
  }
});
//
var routes = <Route path="/" component={App}></Route>;

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router>{routes}</Router>, document.getElementById('root'));
});
