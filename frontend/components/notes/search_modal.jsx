var React = require('react');
var Modal = require('boron/OutlineModal');
var NoteForm = require('./noteform');
var SearchInput = require('react-search-input');

var NoteFormModal = React.createClass({
  showModal: function () {
    this.refs.modal.show();
  },

  hideModal: function () {
    this.refs.modal.hide();
  },

  render: function () {
    return (
      <li onClick={this.showModal}
          className="upper-buttons search"
          data-content="Search">
          <Modal ref="modal">
            <span>Searching all notes for matches!</span>
            <SearchInput/>
          </Modal>
          <i className="fa fa-search fa-2x"></i>
      </li>

    );
  }
});

module.exports = NoteFormModal;
