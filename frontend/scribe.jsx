var ReactDOM = require('react-dom'),
    React = require('react'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    NotebookIndex = require('./components/notebooks/notebook_index'),
    Sidebar = require('./components/sidebar'),
    AllNotes = require('./components/notes/all_notes'),
    NoteIndex = require('./components/notes/note_index'),
    ReactQuill = require("./vendor/react-quill"),
    NoteShowPage = require('./components/notes/note_show_page'),
    Slideout = require('./components/slideout');

var App = React.createClass({
  getInitialState: function () {
    return {value: ""};
  },

  render: function(){
    return (
        <div className="sidebar-parent">
          <Slideout/>
          <Sidebar/>
          <div className='container group'>
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
