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

  componentWillMount: function () {
    this.NoteStoreListener = NoteStore.addListener(this._onChange);
  },

  componentDidMount: function () {
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

    if (this.state.selectedNote) {
      var selectedNoteShow = <NoteShowPage note={this.state.selectedNote}/>;
    }

    var noteItems = this.state.notes.map(function (noteItem, idx) {
      return <NoteIndexItem
        note={noteItem}
        key={idx}
        handleClick={this.selectNote}/>;
      }.bind(this));

    return (
      <div>
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
