var AppDispatcher = require('../dispatcher/dispatcher');
var NoteConstants = require('../constants/note_constants');

var NoteActions = {
  receiveNotes: function (notes) {
    AppDispatcher.dispatch({
      actionType: NoteConstants.RESET_NOTES,
      notes: notes
    });
  }
};

module.exports = NoteActions; 
