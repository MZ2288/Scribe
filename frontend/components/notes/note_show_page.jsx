var React = require('react');
var NoteStore = require('../../stores/note_store');
var ApiUtil = require('../../util/api_util');
// var RichText = require('../quill');

var NoteShowPage = React.createClass({

getStateFromStore: function () {
  var splitPath = this.props.location.pathname.split("/");
  var id = splitPath[splitPath.length - 1];
  return { note: NoteStore.find(parseInt(id)) };
},

_onChange: function () {
  this.setState(this.getStateFromStore());
},

getInitialState: function () {
  return this.getStateFromStore();
},

componentDidMount: function () {
  this.NoteStoreListener = NoteStore.addListener(this._onChange);
  // ApiUtil.fetchSingleNote(parseInt(this.props.params.noteId));
},

componentWillUnmount: function () {
  this.NoteStoreListener.remove();
},


  render: function () {
    if(!this.state.note){
      return <div></div>;
    }

    return (
      <div className="NoteShowPage">
      </div>
    );
  }
});

module.exports = NoteShowPage;
