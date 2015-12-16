var React = require('react');

var NoteIndexItem = React.createClass({
  getInitialState: function () {
    var title = this.props.note.title;
    var body = this.props.note.body;
    return ({ title: title, body: body});
  },

  render: function () {
    return (
      <div>
        <p>{this.state.body}</p>
      </div>
    );
  }
});

module.exports = NoteIndexItem;
