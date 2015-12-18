var ReactDOM = require('react-dom'),
    React = require('react'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    NotebookIndex = require('./components/notebooks/notebook_index'),
    Sidebar = require('./components/sidebar'),
    NoteIndex = require('./components/notes/note_index'),
    NoteShowPage = require('./components/notes/note_show_page');

var App = React.createClass({
  render: function(){
    return (
        <div className="sidebar-parent">
          <Sidebar/>
          <NotebookIndex/>
          <div>
            <header><h1>Scribe</h1></header>
            {this.props.children}
          </div>
        </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <Route path='notes/:id' component={NoteShowPage}></Route>
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router>{routes}</Router>, document.getElementById('root'));
});
