var React = require('react');
var ShowStore = require('../../stores/show_store');
var NotebookIndexItem = require('./indexItem');
var NoteIndex = require('../notes/note_index');
var NoteStore = require('../../stores/note_store');
var NoteBookStore = require('../../stores/notebook_store');
var ApiUtil = require('../../util/api_util');
var AllNotes = React.createClass({
  getInitialState: function () {
    return {
      notes: null,
      active: false
    };
  },

  componentDidMount: function () {
    this.ShowStoreListener = ShowStore.addListener(this._onChange);
    this.NoteBookStoreListener = NoteBookStore.addListener(this._onChange);
    ApiUtil.fetchNotebooks();
  },

  componentWillUnmount: function () {
    this.ShowStoreListener.remove();
    this.NoteBookStoreListener.remove();
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

        <div className={allNotesClasses}>
          <div>
            <br></br>
            <br></br>
            <span className="all-notes-span">NOTES</span>
            <br></br>
            <br></br>
            <NoteIndex notebook="null"/>
          </div>
        </div>

    );
  }
});

module.exports = AllNotes;
