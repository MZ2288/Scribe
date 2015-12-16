var NoteActions = require('../actions/note_actions');
var NotebookActions = require('../actions/notebook_actions');

var ApiUtil = {
  fetchNotes: function () {
    $.ajax({
      url: "api/notes",
      type: "GET",
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
    debugger
    $.ajax({
      url: 'api/notebooks',
      type: "POST",
      data: {notebook: notebook},
      success: function (newNotebook) {
        NotebookActions.addNotebook(newNotebook);
      }
    });
  }
};



module.exports = ApiUtil;
