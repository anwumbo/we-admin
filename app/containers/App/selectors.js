import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = (state) => state.global || initialState;

const selectRouter = (state) => state.router;

export const selectFormDomain = (state) => state.form;

export const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    (state) => state.location,
  );

export const makeSelectCurrentCompany = () =>
  createSelector(
    selectGlobal,
    (state) => state.currentCompany,
  );
export const makeSelectAccessToken = () =>
  createSelector(
    selectGlobal,
    (state) => state.token.accessToken,
  );

export const makeSelectUserRole = () =>
  createSelector(
    selectGlobal,
    (state) => state.userProfile.role,
  );

export const makeSelectUserPermissions = () =>
  createSelector(
    selectGlobal,
    (state) => state.permissions,
  );
