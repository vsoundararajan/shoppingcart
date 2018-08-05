import { combineReducers } from 'redux';
import { reducer as couponcodeReducer } from './applyCouponCode';
import { reducer as itemsReducer } from './itemDetails';

const rootReducer = combineReducers({
  couponCode: couponcodeReducer,
  itemsList: itemsReducer
});

export default rootReducer;
