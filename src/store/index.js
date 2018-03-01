import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from 'store/modules';
import rootSaga from 'store/sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const isDev = process.env.NODE_ENV === 'development';

/* eslint-disable no-underscore-dangle */
// 개발 환경이고, redux 개발자도구가 chrome에 설치되어 있으면,
const reduxDevTools =
  isDev &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-enable */

if (isDev) {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const store = createStore(
  reducer,
  compose(applyMiddleware(...middlewares), reduxDevTools),
);

sagaMiddleware.run(rootSaga);

export default store;
