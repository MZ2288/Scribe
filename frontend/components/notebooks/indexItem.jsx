var React = require('react');
var ApiUtil = require('../../util/api_util');
var NotebookIndex = require('./notebook_index');

var NotebookIndexItem = React.createClass({
  deleteNotebook: function (e) {
    e.preventDefault();
    NotebookIndex.unselectNotebook();
    ApiUtil.deleteNotebook(this.props.notebook);
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
        <button onClick={this.deleteNotebook}>Delete Notebook</button>
      </div>
    );
  }
});

module.exports = NotebookIndexItem;
