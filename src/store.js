import { createStore, applyMiddleware, compose } from 'redux';
//import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import rootReducer from './reducer';
//import rootSaga from './saga';

//const sagaMiddleware = createSagaMiddleware();
export const history = createHistory();
const routerMiddleware = createRouterMiddleware(history);

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(routerMiddleware))
);
/* eslint-enable */

//sagaMiddleware.run(rootSaga);

export default store;
