import _ from 'lodash';
import * as actionTypes from '../constants/action-types';

const initialState = {
  validPromoCode: false,
  promoCode: ''
};

function setPromoCodeReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_PROMO_CODE: {
      let newState = _.cloneDeep(state);
      newState.validPromoCode = true;
      newState.promocode = action.code;

      return newState;
    }
    default: {
      return {
        state
      };
    }
  }
}

export default setPromoCodeReducer;
