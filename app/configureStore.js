/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import * as Sentry from '@sentry/browser';
import { createLogger } from 'redux-logger';

import envConfig from 'config/environment';
import loginSaga from 'containers/AuthPages/Login/saga';
import apiSaga from './utils/api/saga';
import createReducer from './reducers';

/**
 * Config sentry for error reporting
 */
const initSentry = (initialState) => {
  if (envConfig.NODE_ENV !== 'development') {
    const globalState = initialState.global || {};

    // Init sentry config
    Sentry.init({
      dsn: envConfig.SENTRY_DSN,
      environment: envConfig.TARGET_ENV,
      attachStacktrace: true,
      maxBreadcrumbs: 50,
      debug: true,
      ignoreErrors: ['Network failed', 'Timeout', 'PromiseRejectionEvent'],
    });

    // Config information
    Sentry.configureScope((scope) => {
      scope.setUser({
        email: globalState.userProfile && globalState.userProfile.email,
      });
      scope.setTag('current_company', globalState.currentCompany);
    });
  }
};

export default function configureStore(initialState = {}, history) {
  initSentry(initialState);

  let composeEnhancers = compose;
  const reduxSagaMonitorOptions = {};

  // If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them
  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    /* eslint-disable no-underscore-dangle */
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});

    // NOTE: Uncomment the code below to restore support for Redux Saga
    // Dev Tools once it supports redux-saga version 1.x.x
    // if (window.__SAGA_MONITOR_EXTENSION__)
    //   reduxSagaMonitorOptions = {
    //     sagaMonitor: window.__SAGA_MONITOR_EXTENSION__,
    //   };
    /* eslint-enable */
  }

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  // 3. [local only] redux-logger to log redux action
  if (envConfig.NODE_ENV === 'development') {
    const reduxLoggerMiddleWare = createLogger({
      timestamp: false,
      logErrors: false,
      collapsed: (getState, action, logEntry) => logEntry, // don't lapse if error
    });

    middlewares.push(reduxLoggerMiddleWare);
  }

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers),
  );

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry
  store.runSaga(apiSaga);
  store.runSaga(loginSaga);
  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}
