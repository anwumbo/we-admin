import { takeLatest, put, all } from 'redux-saga/effects';
import { replace } from 'connected-react-router';
import { typeAPISuccess } from 'utils/api/constants';
import { apiAction } from 'utils/api/actions';
import API from 'config/apiUrl';
import { POST, GET } from 'utils/request';
import { SUBMIT_LOGIN, GET_USER_INFO } from './constants';

export function* submitLogin(action) {
  const {
    values,
    callbacks: { onSuccess, onFail },
  } = action;

  yield put(
    apiAction({
      url: API.postUserLoginURL(),
      method: POST,
      label: SUBMIT_LOGIN,
      body: values,
      onFail,
      onSuccess,
    }),
  );
}

export function* fetchUserInfo({ token, redirectPath }) {
  const response = yield all([
    GET(API.getUserInfoURL(), token),
    // GET(API.getPublicPaymentSetting(), token),
  ]);

  yield put({ type: typeAPISuccess(GET_USER_INFO), payload: response });

  if (redirectPath) {
    yield put(replace(redirectPath));
  }
}

export default function* AuthSaga() {
  yield takeLatest(SUBMIT_LOGIN, submitLogin);
  yield takeLatest(GET_USER_INFO, fetchUserInfo);
}
