import produce from 'immer';

import { typeAPISuccess } from 'utils/api/constants';
import { SUBMIT_LOGIN } from 'containers/AuthPages/Login/constants';
// import { SET_DEFAULT_CURRENT_COMPANY, CLEAR_TOKEN } from './constants';

export const initialState = {
  token: {
    accessToken: '',
    refreshToken: '',
    expiredTimestamp: '',
    scope: '',
  },
  userProfile: {
    avatar: '',
    fullName: '',
    role: '',
  },
  currentCompany: {
    logo: '',
    id: '',
    name: '',
  },
  permissions: [],
};

const appReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case typeAPISuccess(SUBMIT_LOGIN):
        return handleLoginSuccess(state, draft, action);
      default:
        return draft;
    }
  });

export default appReducer;

/* eslint-disable camelcase */
function handleLoginSuccess(state, draft, action) {
  const {
    access_token,
    refresh_token,
    expires_in,
    scope,
  } = action.payload.data;
  const userToken = draft;

  userToken.token.accessToken = access_token;
  userToken.token.refreshToken = refresh_token;
  userToken.token.expiredTimestamp = expires_in;
  userToken.token.scope = scope;

  return userToken;
}
