var React = require('react');
var Modal = require('boron/OutlineModal');
var NoteForm = require('./noteform');

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
            <span>Search</span>
          </Modal>
          <i className="fa fa-search fa-2x"></i>
      </li>

    );
  }
});

module.exports = NoteFormModal;
