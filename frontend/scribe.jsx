var ReactDOM = require('react-dom'),
    React = require('react'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    NotebookIndex = require('./components/notebooks/notebook_index'),
    NoteIndex = require('./components/notes/note_index');

var App = React.createClass({
  render: function(){
    return (
        <div>
          <header><h1>Scribe</h1></header>
          <NotebookIndex/>
          {this.props.children}
        </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router>{routes}</Router>, document.getElementById('root'));
});
