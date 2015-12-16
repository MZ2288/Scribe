var AppDispatcher = require('../dispatcher/dispatcher');
var NotebookConstants = require('../constants/notebook_constants');

var NotebookActions = {
  receiveAll: function(notebooks){
    AppDispatcher.dispatch({
      actionType: NotebookConstants.RECEIVE_ALL_NOTEBOOKS,
      notebooks: notebooks
    });
  }
};

module.exports = NotebookActions;
