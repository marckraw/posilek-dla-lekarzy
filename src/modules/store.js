import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const configureStore = (initialState = {}) => {
  const middlewares = [sagaMiddleware];

  const enhancers = [];

  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  }

  const store = createStore(
    createReducer(),
    initialState,
    compose(applyMiddleware(...middlewares), ...enhancers)
  );

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const createReducers = require('./reducers').default;
      const nextReducers = createReducers(store.asyncReducers);

      store.replaceReducer(nextReducers);
    });
  }

  return store;
}
