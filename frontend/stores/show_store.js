var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    _active = false,
    ShowStore = new Store(AppDispatcher),
    SHOW_CONSTANTS = require('../constants/note_constants');

ShowStore.active = function () {
  return _active;
};

ShowStore.changeActiveStatus = function () {
  _active = !_active;
};

ShowStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case SHOW_CONSTANTS.ACTIVATE_NOTEBOOKS_INDEX:
      ShowStore.changeActiveStatus();
      ShowStore.__emitChange();
      break;
  }
};

module.exports = ShowStore;
