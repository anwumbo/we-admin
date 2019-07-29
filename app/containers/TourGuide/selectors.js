import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectTourGuide = (state) => state.Tour_Guide || initialState;

export const makeSelectLoading = () =>
  createSelector(
    selectTourGuide,
    (state) => state.loading,
  );

export const makeSelectTourGuide = () =>
  createSelector(
    selectTourGuide,
    (state) => state.listTourGuide,
  );

export const makeSelectPagination = () =>
  createSelector(
    selectTourGuide,
    (state) => state.pagination,
  );
