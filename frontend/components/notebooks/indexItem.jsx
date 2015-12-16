var React = require('react');

var NotebookIndexItem = React.createClass({
  render: function () {
    return (
      <div>
        <p>
          {this.props.title}
        </p>
      </div>
    );
  }
});

module.exports = NotebookIndexItem;
