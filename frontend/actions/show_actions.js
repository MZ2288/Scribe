var AppDispatcher = require('../dispatcher/dispatcher');
var SHOW_CONSTANTS = require('../constants/show_constants');
  var ShowActions = {
    ShowNotebookIndex: function () {
      AppDispatcher.dispatch({
        actionType: SHOW_CONSTANTS.SHOW_NOTEBOOKS_INDEX
      });
    },

    ShowAllNotes: function () {
      AppDispatcher.dispatch({
        actionType: SHOW_CONSTANTS.SHOW_NOTES
      });
    }
  };
module.exports = ShowActions;
