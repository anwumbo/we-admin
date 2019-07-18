import { SUBMIT_LOGIN, GET_USER_INFO, REFRESH_TOKEN } from './constants';

export const submitLoginAction = (values, callbacks) => ({
  type: SUBMIT_LOGIN,
  values,
  callbacks,
});

export const refreshUserData = (token, redirectPath, callbacks) => ({
  type: GET_USER_INFO,
  token,
  redirectPath,
  callbacks,
});

export const refreshToken = () => ({
  type: REFRESH_TOKEN,
});
