import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from './root-reducer';
import rootEpic from './root-epic';

const composeEnhancers =
  // (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || 
  compose;

function configureStore(initialState?: {}) {
  // configure middlewares
  //const middlewares = [createEpicMiddleware(rootEpic)];
  // compose enhancers
  //const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  // create store
  return createStore(rootReducer, initialState!);
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

// export store singleton instance
export default store;
