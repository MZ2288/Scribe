var React = require('react');

var NotebookIndexItem = React.createClass({
  render: function () {
    if (!this.props.notebook) {
      return <div></div>;
    }
    return (
      <div onClick={this.props.handleClick.bind(null, this.props.notebook)}>
        <p>
          {this.props.notebook.title}
        </p>
      </div>
    );
  }
});

module.exports = NotebookIndexItem;
