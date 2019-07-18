import { SET_DEFAULT_CURRENT_COMPANY, CLEAR_TOKEN } from './constants';

export const setDefaultCurrentCompany = (company) => ({
  type: SET_DEFAULT_CURRENT_COMPANY,
  company,
});

export const clearToken = () => ({
  type: CLEAR_TOKEN,
});
