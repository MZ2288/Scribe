var React = require('react');
var NoteBookStore = require('../stores/notebook_store');
var ApiUtil = require('../util/api_util');

var NotebookIndex = React.createClass({
  getInitialState: function () {
    return {
      notebooks: NoteBookStore.all()
    };
  },

  componentDidMount: function () {
    this.NoteBookStoreListener = NoteBookStore.addListener(this._onChange);
    ApiUtil.fetchNotebooks();
  },

  componentWillUnmount: function () {
    this.NoteBookStoreListener.remove();
  },

  _onChange: function () {
    this.setState({notebooks: NoteBookStore.all() });
  },

  render: function () {
    console.log(this.state.notebooks);
    var something;
    if (typeof this.state.notebooks !== 'undefined') {
      something = this.state.notebooks.map(function(notebook) {
        return <div>{notebook}</div>;
      });
    }
    return (
      <div>
        <ul>
          {something}
        </ul>
        Hello
      </div>
    );
  }
});

module.exports = NotebookIndex;
