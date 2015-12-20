var React = require('react');
var ReactQuill = require('react-quill');
var RichText = React.createClass({

  render: function () {
    return (
      <ReactQuill theme="snow"
                  value={this.props.text} />
    );
  }
});

module.exports = RichText;
