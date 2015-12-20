var React = require('react');
var ApiUtil = require('../../util/api_util');

var NotebookIndexItem = React.createClass({
  deleteNotebook: function (e) {
    e.preventDefault();
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
        <p onClick={this.deleteNotebook} className='trash'>
          <i className="fa fa-trash"></i>
        </p>
      </div>
    );
  }
});

module.exports = NotebookIndexItem;
