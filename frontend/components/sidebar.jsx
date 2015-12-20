
var React = require('react');
var ApiUtil = require('../util/api_util');
var ShowActions = require('../actions/show_actions');
var ShowStore = require('../stores/show_store');
var Sidebar = React.createClass({

  activateNotebooks: function () {
    ShowActions.ShowNotebookIndex();
  },

  showNotes: function () {
    ApiUtil.fetchNotes();
    ShowActions.ShowAllNotes();
  },

  render: function() {
    return (
      <div className="sidebar">
        <div>
          <img className="logo" src="/assets/logo" />
          <div className='sidebar-buttons'>
          <ul>
              <li onClick={this.props.addNote}
                  className="upper-buttons new-note"
                  data-content="Add Note">
                  <i className="fa fa-plus fa-2x"></i>
              </li>
              <li onClick={this.props.search}
                  className="upper-buttons search"
                  data-content="Search">
                  <i className="fa fa-search fa-2x"></i>
              </li>
            </ul>

            <ul className="lower-ul">
              <li onClick={this.showNotes}
                  className="lower-buttons notes"
                  data-content="Notes">
                  <i className="fa fa-sticky-note fa-2x"></i>
              </li>
              <li onClick={this.activateNotebooks}
                  className="lower-buttons notebooks"
                  data-content="Notebooks">
                  <i className="fa fa-book fa-2x"></i>
              </li>
              <li className="lower-buttons tags"
                  data-content="Tags">
                  <i className="fa fa-tags fa-2x"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Sidebar;
