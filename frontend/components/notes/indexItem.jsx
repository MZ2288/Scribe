var React = require('react');

var NoteIndexItem = React.createClass({

  render: function () {
    return (
      <div>
        <p>{this.props.note.body}</p>
      </div>
    );
  }
});

module.exports = NoteIndexItem;
