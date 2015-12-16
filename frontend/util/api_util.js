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
  }
};



module.exports = ApiUtil;
