var AppDispatcher = require('../dispatcher/dispatcher');
var NotebookConstants = require('../constants/notebook_constants');

var NotebookActions = {
  receiveAllNotebooks: function(notebooks){
    AppDispatcher.dispatch({
      actionType: NotebookConstants.RECEIVE_ALL_NOTEBOOKS,
      notebooks: notebooks
    });
  },

  addNotebook: function (notebook) {
    AppDispatcher.dispatch({
      actionType: NotebookConstants.ADD_NOTEBOOK,
      notebook: notebook
    });
  },
};

module.exports = NotebookActions;
