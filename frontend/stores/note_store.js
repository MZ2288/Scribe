var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    _notes = [],
    NoteStore = new Store(AppDispatcher);

var resetNotes = function(notes){
  _notes = notes;
};

NoteStore.all = function () {
  return _notes.slice();
};

NoteStore.addNote = function (note) {
  _notes.push(note);
};

NoteStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case 'RECEIVED_ALL_NOTES':
      resetNotes(payload.notes);
      NoteStore.__emitChange();
      break;
    case "CREATE_NOTE":
      NoteStore.addNote(payload.note);
      NoteStore.__emitChange();
  }
};

module.exports = NoteStore;
