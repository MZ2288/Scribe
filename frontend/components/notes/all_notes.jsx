var React = require('react');
var ShowStore = require('../../stores/show_store');
var NotebookIndexItem = require('./indexItem');
var NoteIndex = require('../notes/note_index');
var NoteStore = require('../../stores/note_store');
var AllNotes = React.createClass({
  getInitialState: function () {
    return {
      notes: null,
      active: false
    };
  },

  componentDidMount: function () {
    this.ShowStoreListener = ShowStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.ShowStoreListener.remove();
  },

  _onChange: function () {
    this.setState({
      notes: NoteStore.all(),
      active: ShowStore.notesActive()
    });
  },

  render: function () {

        if (this.state.active) {
          var allNotesClasses = "allnotes-container active";
        } else {
          var allNotesClasses = "allnotes-container";
        }

    return (
      <div className="notebook-index">
        <div className={allNotesClasses}>
          <div>
            <NoteIndex notebook="null"/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = AllNotes;
