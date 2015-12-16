var React = require('react');
var NoteBookStore = require('../stores/notebook_store');

var Dashboard = React.createClass({
  getInitialState: function () {
    notebooks: [];
  },

  componentDidMount: function () {
    this.NoteBookStoreListener = NoteBookStore.addListener(this._noteBookChanged);
    this.showNoteBooks();
  },

  componentWillUnmount: function () {
    this.NoteBookStoreListener.remove();
  },

  _onChange: function () {
    this.setState({notebooks: NoteBookStore.all() });
  }
});

module.exports = Dashboard;
