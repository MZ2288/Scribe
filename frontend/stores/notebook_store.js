var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var NoteBookStore = new Store(AppDispatcher);
var NotebookConstants = require('../constants/notebook_constants');
var _noteBooks = [];

var resetNoteBooks = function (notebooks) {
  _noteBooks = notebooks.slice();
};

NoteBookStore.all = function () {
  return _noteBooks.slice();
};


NoteBookStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case NotebookConstants.RECEIVE_ALL_NOTEBOOKS:
    var result = resetNoteBooks(payload.notebooks);
    NoteBookStore.__emitChange();
  }
};

module.exports = NoteBookStore;
