var React = require('react');
var ApiUtil = require('../../util/api_util');

var NotebookIndexItem = React.createClass({
  deleteNotebook: function (e) {
    e.preventDefault();
    var answer = confirm("Are you sure you want to delete this notebook?");
    if (answer) {
      ApiUtil.deleteNotebook(this.props.notebook);
    }
  },

  render: function () {
    if (!this.props.notebook) {
      return <div></div>;
    }
    return (
      <div className="notebook-index-item">
        <div onClick={this.props.handleClick.bind(null, this.props.notebook)}>
          <span>
            {this.props.notebook.title}
          </span>
        </div>
        <br></br>
        <p onClick={this.deleteNotebook} className='trash'>
          <i className="fa fa-trash"></i>
        </p>
      </div>
    );
  }
});

module.exports = NotebookIndexItem;
