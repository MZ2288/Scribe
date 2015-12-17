var React = require('react');
var NoteBookStore = require('../../stores/notebook_store');
var ApiUtil = require('../../util/api_util');
var NoteBookForm = require('./notebookform');
var NotebookIndexItem = require('./indexItem');
var NoteIndex = require('../notes/note_index');

var NotebookIndex = React.createClass({

  getInitialState: function () {
    return {
      notebooks: NoteBookStore.all(),
      selectedNotebook: null
    };
  },

  componentDidMount: function () {
    this.NoteBookStoreListener = NoteBookStore.addListener(this._onChange);
    ApiUtil.fetchNotebooks();
  },

  componentWillUnmount: function () {
    this.NoteBookStoreListener.remove();
  },

  _onChange: function () {
    this.setState({notebooks: NoteBookStore.all() });
  },

  selectNotebook: function (notebook) {
    this.setState({ selectedNotebook: notebook });
  },

  unselectNotebook: function () {
    this.setState({ selectedNotebook: null });
  },

  render: function(){
  var notebooks = this.state.notebooks.map(function (notebook, idx) {
    return <NotebookIndexItem handleClick={this.selectNotebook} notebook={notebook} key={idx}/>;
  }.bind(this));

  if (this.state.selectedNotebook) {
    var selectedNotebook = this.state.selectedNotebook.title;
  }

  var notesIndex = this.state.selectedNotebook ? <NoteIndex notebook={this.state.selectedNotebook}/> : <div></div>;

  return (
    <div className='container group'>
      <div className='notebook-container'>
        <NoteBookForm/>
        <button onClick={this.unselectNotebook}>Back to All Notebooks</button>
        {selectedNotebook ? selectedNotebook :notebooks}
      </div>
      <div>
        {notesIndex}
      </div>
    </div>
  );
}

});

module.exports = NotebookIndex;
