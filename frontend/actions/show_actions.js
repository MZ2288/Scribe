var AppDispatcher = require('../dispatcher/dispatcher');
var SHOW_CONSTANTS = require('../constants/show_constants');
  var ShowActions = {
    ShowNotebookIndex: function () {
      AppDispatcher.dispatch({
        actionType: SHOW_CONSTANTS.ACTIVATE_NOTEBOOKS_INDEX
      });
    }
  };
module.exports = ShowActions;
