var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    _notes = [],
    NoteStore = new Store(AppDispatcher),
    NOTE_CONSTANTS = require('../constants/note_constants');

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
    case NOTE_CONSTANTS.RECEIVED_ALL_NOTES:
      resetNotes(payload.notes);
      NoteStore.__emitChange();
      break;
    case NOTE_CONSTANTS.CREATE_NOTE:
      NoteStore.addNote(payload.note);
      NoteStore.__emitChange();
  }
};

module.exports = NoteStore;
