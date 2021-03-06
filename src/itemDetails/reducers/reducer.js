import _ from 'lodash';
import * as actionTypes from '../constants/action-types';

function initItemsReducer(state = {}, action) {
  const items = action.items;
  switch (action.type) {
    case actionTypes.INIT_ITEMS: {
      let newState = _.cloneDeep(state);
      newState.items = items;
      return newState;
    }
    default: {
      return {
        state
      };
    }
  }
}

export default initItemsReducer;
