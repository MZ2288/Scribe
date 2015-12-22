var NoteActions = require('../actions/note_actions');
var NotebookActions = require('../actions/notebook_actions');

var ApiUtil = {
  fetchNotes: function (id) {
    if (typeof id === "undefined") {
      id = "null";
    }
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
      data: {note: note, notebook_id: note.notebook_id},
      success: function (newNote) {
        NoteActions.addNote(newNote);
      }
    });
  },

  updateNote: function (note) {
    var id = note.id;
    $.ajax({
      url: 'api/notes/' + id,
      type: "PATCH",
      data: {note: note},
      success: function (newNote) {
        NoteActions.updateNote(newNote);
      }
    });
  },

  deleteNote: function (note) {
    $.ajax({
      url: "/api/notes/" + note.id,
      type: "DELETE",
      success: function (id) {
        NoteActions.deleteNote(id);
      }
    });
  },

  deleteNotebook: function (notebook) {
    $.ajax({
      url: "/api/notebooks/" + notebook.id,
      type: "DELETE",
      success: function (id) {
        NotebookActions.deleteNotebook(id);
      }
    });
  },

  logout: function () {
    $.ajax({
      url: "/session",
      type: "DELETE"
    });
  }
};



module.exports = ApiUtil;
