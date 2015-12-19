var React = require('react');
var NoteStore = require('../../stores/note_store');
var ApiUtil = require('../../util/api_util');
var NoteForm = require('./noteform');
var NoteIndexItem = require('./indexItem');
var NoteShowPage = require('./note_show_page');
var History = require('react-router').History;

var NoteIndex = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return({
      notes: NoteStore.all(),
      selectedNote: null
    });
  },

  componentDidMount: function () {
    this.NoteStoreListener = NoteStore.addListener(this._onChange);
    ApiUtil.fetchNotes(this.props.notebook.id);
  },

  componentWillUnmount: function () {
    this.NoteStoreListener.remove();
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchNotes(newProps.notebook.id);
  },

  _onChange: function () {
    this.setState({notes: NoteStore.all() });
  },

  selectNote: function (note) {
    var url = "notes/" + note.id;
    this.history.pushState(null, url);
  },

  unselectNote: function () {
    this.setState({ selectedNote: null });
  },

  render: function(){
    var selectedNoteShow = <div></div>;

    var noteItems = this.state.notes.map(function (noteItem, idx) {
      return <NoteIndexItem
        note={noteItem}
        key={idx}
        handleClick={this.selectNote}/>;
      }.bind(this));

    if (this.state.selectedNote) {
      // var selectedNote = <span>{this.state.selectedNote.title}</span>;
      var selectedNoteShow = <NoteShowPage note={this.state.selectedNote}/>;
    }

    return (
      <div>
          <NoteForm notebookId={this.props.notebook.id}/>
          <button onClick={this.unselectNote}>Back to All Notes</button>
          <ul>
            {noteItems}
          </ul>
          <div>
            {selectedNoteShow}
          </div>
      </div>
    );
  }
});

module.exports = NoteIndex;
