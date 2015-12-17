var React = require('react'),
    ApiUtil = require('../../util/api_util'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var NoteForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return ({
      title: "",
      body: ""
    });
  },

  createNote: function(e){
    e.preventDefault();
    ApiUtil.createNote({
      title: this.state.title,
      notebook_id: this.props.notebookId,
      body: this.state.body
    });
    this.setState({title: '', body: ''});
  },

  render: function(){
    return(
      <form onSubmit={this.createNote}>
        <div>
          <label>Title:</label>
            <input type='text' valueLink={this.linkState('title')}/>
        </div>
        <div>
         <label>Body:</label>
         <textarea type='text' valueLink={this.linkState('body')}/>
       </div>
        <button>Create Note</button>
      </form>
    );
  }
});

module.exports = NoteForm;
