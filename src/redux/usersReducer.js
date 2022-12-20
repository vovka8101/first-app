const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT = 'SET_CURRENT';
const SET_FETCHING = 'SET_FETCHING';

let initialState = {
  users: [],
  totalCount: 0,
  pageSize: 10,
  currentPage: 1,
  isFetching: false
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(el => {
        return (el.id === action.userId) 
        ? {...el, followed: true }
        : {...el}
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(el => {
        return (el.id === action.userId) 
        ? {...el, followed: false }
        : {...el}
        })
      }
    case SET_USERS:
      return {
        ...state,
        users: [...action.usersPage.items],
        totalCount: action.usersPage.totalCount
      }
    case SET_CURRENT:
      return {
        ...state,
        currentPage: action.page
      }
    case SET_FETCHING:
      return {
        ...state,
        isFetching: action.status
      }
    default:
      break;
  }

  return state;
}

export const follow = (userId) => ({ type: FOLLOW, userId: userId });

export const unfollow = (userId) => {
  return { type: UNFOLLOW, userId: userId };
}

export const setUsers = (usersPage) => {
  return { type: SET_USERS, usersPage };
}

export const setCurrent = (pageNumber) => {
  return {type: SET_CURRENT, page: pageNumber};
}

export const toggleFetching = (status) => {
  return {type: SET_FETCHING, status};
}

export default usersReducer;