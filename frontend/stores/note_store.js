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

NoteStore.deleteNote = function (note) {
  for (var i = 0; i < _notes.length; i++) {
    if (_notes[i] === note) {
      _notes.splice(i, 1);
    }
  }
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
      break;
    case NOTE_CONSTANTS.DELETE_NOTE:
      NoteStore.deleteNote(payload.note);
      NoteStore.__emitChange();
      break;
  }
};

module.exports = NoteStore;
