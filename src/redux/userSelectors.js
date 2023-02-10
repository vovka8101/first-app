import { createSelector } from 'reselect';

const getUsersSelector = (state) => {
  return state.usersPage.users;
};

// use createSelector when need a specific logic
export const getUsers = createSelector(getUsersSelector, (users) => {
  return users.filter(u => true);
});

export const getTotalCount = (state) => {
  return state.usersPage.totalCount;
};

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};

export const getIsFething = (state) => {
  return state.usersPage.IsFething;
};

export const getisFollowInProcess = (state) => {
  return state.usersPage.isFollowInProcess;
};