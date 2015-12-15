var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    _notes = [],
    NoteStore = new Store(AppDispatcher);

NoteStore.all = function () {
  return _notes.slice();
};

module.exports = NoteStore;
