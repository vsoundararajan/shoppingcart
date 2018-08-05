//import _ from 'lodash';
import * as actionTypes from '../constants/action-types';

function initItemsReducer(state = {}, action) {
  console.group('action at initItemsReducer');
  console.log(action);
  console.groupEnd('action at initItemsReducer');

  const items = action.items;
  switch (action.type) {
    case actionTypes.INIT_ITEMS: {
      return {
        ...state,
        items
      };
    }
    default: {
      return {
        state
      };
    }
  }
}

export default initItemsReducer;
