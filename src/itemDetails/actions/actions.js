import * as actionTypes from '../constants/action-types';

function initializeItems(items) {
  return {
    type: actionTypes.INIT_ITEMS,
    items
  };
}

export { initializeItems };
