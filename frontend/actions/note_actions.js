var AppDispatcher = require('../dispatcher/dispatcher');
var NoteConstants = require('../constants/note_constants');

var NoteActions = {
  receiveNotes: function (notes) {
    AppDispatcher.dispatch({
      actionType: NoteConstants.RECEIVED_ALL_NOTES,
      notes: notes
    });
  },

  addNote: function (note) {
    AppDispatcher.dispatch({
      actionType: NoteConstants.CREATE_NOTE,
      note: note
    });
  },

  updateNote: function (note) {
    AppDispatcher.dispatch({
      actionType: NoteConstants.UPDATE_NOTE,
      note: note
    });
  },

  deleteNote: function (note) {
    AppDispatcher.dispatch({
      actionType: NoteConstants.DELETE_NOTE,
      note: note
    });
  }
};

module.exports = NoteActions;
