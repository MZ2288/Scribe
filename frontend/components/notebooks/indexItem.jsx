var React = require('react');
var ApiUtil = require('../../util/api_util');

var NotebookIndexItem = React.createClass({
  deleteNotebook: function (e) {
    debugger
    e.preventDefault();
    ApiUtil.deleteNotebook(this.props.notebook);
  },

  render: function () {
    if (!this.props.notebook) {
      return <div></div>;
    }
    return (
      <div className="notebook-index-item"
           onClick={this.props.handleClick.bind(null, this.props.notebook)}>
        <p>
          {this.props.notebook.title}
          <button onClick={this.deleteNotebook}>Delete Notebook</button>
        </p>
      </div>
    );
  }
});

module.exports = NotebookIndexItem;
