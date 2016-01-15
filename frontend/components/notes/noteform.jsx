var React = require('react'),
    ApiUtil = require('../../util/api_util'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    NotebookStore = require('../../stores/notebook_store');

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
      notebook_id: document.getElementById("selectList").value,
      body: this.state.body
    });
    this.setState({title: '', body: ''});
    this.props.hideModal();
  },

  render: function(){
    var NotebookDropdDownOptions = NotebookStore.all().map(function (notebook, idx) {
      return (<option value={notebook.id}
                      key={idx}>{notebook.title}
              </option>);
    });

    return(
      <form role='form' onSubmit={this.createNote}>

        <div className='form-group'>
         <label className='form-label'>Notebook:</label>
           <select className='form-control' id="selectList">
             {NotebookDropdDownOptions}
           </select>

             <label className='form-label'>Note Title:</label>
              <input className='form-control' type='text' valueLink={this.linkState('title')}/>

           <label className='form-label'>Note Body:</label>
           <textarea className='form-control' type='text' valueLink={this.linkState('body')}/>
          </div>

        <button>Create Note</button>
      </form>
    );
  }
});

module.exports = NoteForm;
