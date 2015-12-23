var React = require('react');
var Modal = require('boron/OutlineModal');

var TagModal = React.createClass({
  showModal: function () {
    this.refs.modal.show();
  },

  hideModal: function () {
    this.refs.modal.hide();
  },

  render: function () {
    return (
      <li onClick={this.showModal}
          className="lower-buttons tags"
          data-content="Tags">
          <Modal ref="modal">
            <span>Are you thirteen? You don't need tags.</span>
          </Modal>
          <i className="fa fa-tags fa-2x"></i>
      </li>

    );
  }
});

module.exports = TagModal;
