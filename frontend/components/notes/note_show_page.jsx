var React = require('react');

var NoteShowPage = React.createClass({
  render: function () {
    return (
      <div className="NoteShowPage">
        {this.props.note.body}
      </div>
    );
  }
});

module.exports = NoteShowPage;
