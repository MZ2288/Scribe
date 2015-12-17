var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var NoteBookStore = new Store(AppDispatcher);
var NotebookConstants = require('../constants/notebook_constants');
var _noteBooks = [];

var resetNoteBooks = function (notebooks) {
  _noteBooks = notebooks;
};

NoteBookStore.all = function () {
  return _noteBooks.slice();
};

NoteBookStore.addNotebook = function (notebook) {
  _noteBooks.push(notebook);
};

NoteBookStore.deleteNotebook = function (id) {
  for (var i = 0; i < _noteBooks.length; i++) {
    if (_noteBooks[i].id === id) {
      _noteBooks.splice(i, 1);
    }
  }
};

NoteBookStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case NotebookConstants.RECEIVE_ALL_NOTEBOOKS:
      resetNoteBooks(payload.notebooks);
      NoteBookStore.__emitChange();
      break;
    case NotebookConstants.ADD_NOTEBOOK:
      NoteBookStore.addNotebook(payload.notebook);
      NoteBookStore.__emitChange();
      break;
    case NotebookConstants.DELETE_NOTEBOOK:
      NoteBookStore.deleteNotebook(payload.notebook);
      NoteBookStore.__emitChange();
      break;
  }
};

module.exports = NoteBookStore;
