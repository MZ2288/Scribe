
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var root = document.getElementById('root');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var App = React.createClass({
  render: function () {
    return (
      <div>
        
      </div>
    );
  }
});
//
var routes = <Route path="/" component={App}></Route>;


ReactDOM.render(<Router>{routes}</Router>, document.getElementById('root'));
