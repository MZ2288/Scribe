var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var NoteBookStore = new Store(AppDispatcher);
var _noteBooks = [];

NoteBookStore.all = function () {
  return _noteBooks.slice();
};

NoteBookStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    
  }
}
