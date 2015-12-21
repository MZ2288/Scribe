var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    _active = false,
    _notesActive = false,
    ShowStore = new Store(AppDispatcher),
    SHOW_CONSTANTS = require('../constants/show_constants');

ShowStore.active = function () {
  return _active;
};

ShowStore.changeActiveStatus = function () {
  _active = !_active;
  if (_active === true && _notesActive === true) {
    _notesActive = false;
  }
};

ShowStore.notesActive = function () {
  return _notesActive;
};

ShowStore.changeNotesActiveStatus = function () {
  _notesActive = !_notesActive;
  if (_notesActive === true && _active === true) {
    _active = false;
  }
};

ShowStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case SHOW_CONSTANTS.SHOW_NOTEBOOKS_INDEX:
      ShowStore.changeActiveStatus();
      ShowStore.__emitChange();
      break;
    case SHOW_CONSTANTS.SHOW_NOTES:
      ShowStore.changeNotesActiveStatus();
      ShowStore.__emitChange();
      break;
  }
};

module.exports = ShowStore;
