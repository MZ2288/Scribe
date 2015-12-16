var React = require('react');
var NoteBookStore = require('../../stores/notebook_store');
var ApiUtil = require('../../util/api_util');
var NoteBookForm = require('./notebookform');
var NotebookIndexItem = require('./indexItem');

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

  render: function(){
  var notebooks = this.state.notebooks.map(function (notebook, idx) {
    return <NotebookIndexItem notebook={notebook} key={idx}/>;
  });

  return (
    <div className='container group'>
      <div className='notebook-container'>
        <NoteBookForm/>
        {notebooks}
      </div>
      <div className='notes-container'>
        {this.props.children}
      </div>
    </div>
  );
}

});

module.exports = NotebookIndex;
