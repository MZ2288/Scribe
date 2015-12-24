
var React = require('react');
var ApiUtil = require('../util/api_util');
var ShowActions = require('../actions/show_actions');
var ShowStore = require('../stores/show_store');
var NoteFormModal = require('./notes/form_modal');
var SearchModal = require('./notes/search_modal');
var TagModal = require('./notes/tag_modal');
var Sidebar = React.createClass({

  activateNotebooks: function () {
    ShowActions.ShowNotebookIndex();
  },

  showNotes: function () {
    ApiUtil.fetchNotes();
    ShowActions.ShowAllNotes();
  },

  componentDidMount: function () {
    this.lowerButtonsNotebooks.click();
  },

  render: function() {
    return (
      <div className="sidebar">
        <div>
          <img className="logo" src="/assets/logo" />
          <div className='sidebar-buttons'>
          <ul>
            <NoteFormModal/>
          </ul>
            <ul className="lower-ul">
              <li onClick={this.showNotes}
                  className="lower-buttons notes"
                  data-content="Notes">
                  <i className="fa fa-sticky-note fa-2x"></i>
              </li>
              <li onClick={this.activateNotebooks}
                  ref={function(ref){this.lowerButtonsNotebooks = ref;}.bind(this)}
                  className="lower-buttons notebooks"
                  data-content="Notebooks">
                  <i className="fa fa-book fa-2x"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Sidebar;
            // <SearchModal/>
              // <li className="lower-buttons tags"
              //     data-content="Tags">
              //     <i className="fa fa-tags fa-2x"></i>
              // </li>
