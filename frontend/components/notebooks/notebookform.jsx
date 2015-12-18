var React = require('react'),
    ApiUtil = require('../../util/api_util'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var NoteBookForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return ({title: "", description: ""});
  },

  createNotebook: function(e){
    e.preventDefault();
    ApiUtil.createNotebook({title: this.state.title});
    this.setState({title: ''});
  },

  render: function(){
    return(
      <form onSubmit={this.createNotebook}>
        <div>
          <label>Notebook Title:</label>
            <input type='text' valueLink={this.linkState('title')}/>
        </div>
        <button>Create Notebook</button>
      </form>
    );
  }
});

module.exports = NoteBookForm;
