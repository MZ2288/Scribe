var React = require('react'),
    ApiUtil = require('../../util/api_util');
    


var NoteBookForm = React.createClass({

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
          <label>Title:</label>
          <input type='text'/>
        </div>
        <button>Create Notebook</button>
      </form>
    );
  }
});

module.exports = NoteBookForm;
