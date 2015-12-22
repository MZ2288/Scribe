var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    _notes = [],
    NoteStore = new Store(AppDispatcher),
    NOTE_CONSTANTS = require('../constants/note_constants'),
    NOTEBOOK_CONSTANTS = require('../constants/notebook_constants');

var resetNotes = function(notes){
  _notes = notes;
};

NoteStore.find = function (id) {
  return _notes.find(function (el) {
    return el.id === id;
  });
};

NoteStore.all = function () {
  return _notes.slice();
};

NoteStore.addNote = function (note) {
  _notes.push(note);
};

NoteStore.deleteNote = function (id) {
  for (var i = 0; i < _notes.length; i++) {
    if (_notes[i].id === id) {
      _notes.splice(i, 1);
    }
  }
};

NoteStore.updateNote = function (note) {
  for (var i = 0; i < _notes.length; i++) {
    if (_notes[i].id === note.id) {
      _notes[i] = note;
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
    case NOTE_CONSTANTS.UPDATE_NOTE:
      NoteStore.updateNote(payload.note);
      NoteStore.__emitChange();
      break;
    case NOTEBOOK_CONSTANTS.DELETE_NOTEBOOK:
      _notes = [];
      NoteStore.__emitChange();
      break;
  }
};

module.exports = NoteStore;
