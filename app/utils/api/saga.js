/**
 * API Saga
 *
 * Handle API request
 */
import { put, takeEvery, fork, take, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'connected-react-router';

import { REQUEST_API } from './constants';
import { apiActionRequest, apiActionSuccess, apiActionFail } from './actions';

/**
 *  Handle all fetch API action
 */
export function* callAPI(action) {
  const { method, url, body, onSuccess, onFail, label } = action.request;

  yield put(apiActionRequest(label, action.request));

  try {
    const response = yield method(url, body);

    if (onSuccess) onSuccess(response);

    yield put(apiActionSuccess(label, response));
  } catch (err) {
    if (onFail) onFail(err);

    yield put(apiActionFail(label, err));
  }
}

export function* forkCallAPITask(action) {
  try {
    const watcher = yield fork(callAPI, action);
    const routerAction = yield take(LOCATION_CHANGE);

    if (
      window.location.pathname + window.location.search !==
      routerAction.payload.pathname + routerAction.payload.search
    ) {
      yield cancel(watcher);
    }
  } catch (error) {
    console.info('[APP] Cancel REQUEST_API task -> error', error);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* apiSaga() {
  yield takeEvery(REQUEST_API, callAPI);
}
