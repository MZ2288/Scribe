var React = require('react');
var NotebookIndex = require('./notebooks/notebook_index');
var AllNotes = require('./notes/all_notes');
var ShowStore = require('../stores/show_store');

var Slideout = React.createClass({
  getInitialState: function () {
    return { whatToDisplay: <div></div> };
  },

  componentDidMount: function () {
    this.ShowStoreListener = ShowStore.addListener(this._onChange);
  },

  _onChange: function () {
    if (ShowStore.notesActive()) {
      this.setState({ whatToDisplay: <AllNotes/> });
    } else if (ShowStore.active()) {
      this.setState({ whatToDisplay: <NotebookIndex/> });
    }
  },

  componentWillUnmount: function () {
    this.ShowStoreListener.remove();
  },


  render: function () {
    return (
      <div className="notebook-index">
        {this.state.whatToDisplay}
      </div>
    );
  }
});

module.exports = Slideout;
