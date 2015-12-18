var React = require('react');
var ApiUtil = require('../../util/api_util');

var NoteIndexItem = React.createClass({
  deleteNote: function (e) {
   e.preventDefault();
   ApiUtil.deleteNote(this.props.note);
 },

  render: function () {
    return (
      <div className="notes-index-item"
           onClick={this.props.handleClick.bind(null, this.props.note)}>
        <p>{this.props.note.title}</p>
        <button onClick={this.deleteNote}>Delete Note</button>
      </div>
    );
  }
});

module.exports = NoteIndexItem;
