import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectUserManagement = (state) => state.User_Managements || initialState;

export const makeSelectLoading = () =>
  createSelector(
    selectUserManagement,
    (state) => state.loading,
  );

export const makeSelectUsers = () =>
  createSelector(
    selectUserManagement,
    (substate) => substate.users,
  );

export const makeSelectPagination = () =>
  createSelector(
    selectUserManagement,
    (substate) => substate.pagination,
  );
