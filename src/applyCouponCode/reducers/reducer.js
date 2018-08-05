//import _ from 'lodash';
import * as actionTypes from '../constants/action-types';

const initialState = {
  validPromoCode: false,
  promoCode: ''
};

function setPromoCodeReducer(state = initialState, action) {
  console.group('action at setPromoCodeReducer');
  console.log(action);
  console.groupEnd('action at setPromoCodeReducer');
  switch (action.type) {
    case actionTypes.SET_PROMO_CODE: {
      return {
        ...state,
        validPromoCode: true,
        promocode: action.code
      };
    }
    default: {
      return {
        state
      };
    }
  }
}

export default setPromoCodeReducer;
