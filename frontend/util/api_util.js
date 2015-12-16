var NoteActions = require('../actions/note_actions');
var NotebookActions = require('../actions/notebook_actions');

var ApiUtil = {
  fetchNotes: function (id) {
    $.ajax({
      url: "api/notes",
      type: "GET",
      data: {notebook_id: id},
      dataType: "json",
      success: function (notes) {
        NoteActions.receiveNotes(notes);
      }
    });
  },

  fetchNotebooks: function () {
    $.ajax({
      url: "api/notebooks",
      type: "GET",
      dataType: "json",
      success: function (notebooks) {
        NotebookActions.receiveAllNotebooks(notebooks);
      }
    });
  },

  createNotebook: function (notebook) {
    $.ajax({
      url: 'api/notebooks',
      type: "POST",
      data: {notebook: notebook},
      success: function (newNotebook) {
        NotebookActions.addNotebook(newNotebook);
      }
    });
  },

  createNote: function (note) {
    $.ajax({
      url: 'api/notes',
      type: "POST",
      data: {note: note},
      success: function (newNote) {
        NoteActions.addNote(newNote);
      }
    });
  }
};



module.exports = ApiUtil;
