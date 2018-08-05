import * as actionTypes from '../constants/action-types';

function setPromoCode(code) {
  return {
    type: actionTypes.SET_PROMO_CODE,
    code
  };
}

export { setPromoCode };
