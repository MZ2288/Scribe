var React = require('react');
var NoteBookStore = require('../../stores/notebook_store');
var ApiUtil = require('../../util/api_util');
var NotebookFormModal = require('./notebook_form_modal');
var NotebookIndexItem = require('./indexItem');
var NoteIndex = require('../notes/note_index');
var AppDispatcher = require('../../dispatcher/dispatcher');
var SHOW_CONSTANTS = require('../../constants/show_constants');
var ShowStore = require('../../stores/show_store');
var AllNotes = require('../notes/all_notes');
var NotebookIndex = React.createClass({

  getInitialState: function () {
    return {
      notebooks: NoteBookStore.all(),
      selectedNotebook: null,
      active: false
    };
  },

  componentDidMount: function () {
    this.NoteBookStoreListener = NoteBookStore.addListener(this._onChange);
    this.ShowStoreListener = ShowStore.addListener(this._onChange);
    ApiUtil.fetchNotebooks();
  },

  componentWillUnmount: function () {
    this.NoteBookStoreListener.remove();
    this.ShowStoreListener.remove();
  },

  _onChange: function () {
    this.setState({
      notebooks: NoteBookStore.all(),
      active: ShowStore.active()
     });
  },

  selectNotebook: function (notebook) {
    this.setState({ selectedNotebook: notebook });
  },

  unselectNotebook: function () {
    this.setState({ selectedNotebook: null });
  },

  render: function(){
    var notebooks = this.state.notebooks.map(function (notebook, idx) {
        return <NotebookIndexItem
          handleClick={this.selectNotebook}
          notebook={notebook}
          key={idx}/>;
      }.bind(this));

    if (this.state.selectedNotebook) {
      var notesIndex  = <NoteIndex notebook={this.state.selectedNotebook}/>;
      var selectedNotebookDisplay =
        <div>
           {notesIndex}
        </div>;
    }

    if (this.state.active) {
      var noteBookContainerClasses = "notebook-container active";
    } else {
      var noteBookContainerClasses = "notebook-container";
    }

    return (
      <div className={noteBookContainerClasses}>
        <div className="top-of-notebook-index">
          <NotebookFormModal/>
          <button
            className="backtonotebooks-button"
            onClick={this.unselectNotebook}>
            <span>
              Back to Notebooks
            </span>
          </button>
        </div>
        <br></br>
        <div>
          {selectedNotebookDisplay ? selectedNotebookDisplay : notebooks}
        </div>
      </div>
    );
  }
});

module.exports = NotebookIndex;
