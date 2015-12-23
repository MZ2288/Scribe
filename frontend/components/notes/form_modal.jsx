var React = require('react');
var Modal = require('boron/OutlineModal');
var NoteForm = require('./noteform');
var NoteBookStore = require('../../stores/notebook_store');

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
          className="upper-buttons new-note"
          data-content="Add Note">
          <Modal ref="modal">
            <NoteForm hideModal={this.hideModal}/>
          </Modal>
          <i className="fa fa-plus fa-2x"></i>
      </li>
    );
  }
});

module.exports = NoteFormModal;
