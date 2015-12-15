var NoteActions = require('../actions/note_actions');

var ApiUtil = {
  fetchNotes : function () {
    $.ajax({
      url: "api/notes",
      type: "GET",
      dataType: "json",
      success: function (notes) {
        NoteActions.receiveNotes(notes);
      }
    });
  }
};

module.exports = ApiUtil;
