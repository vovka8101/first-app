const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
const SET_CURRENT = 'SET_CURRENT'

let initialState = {
  users: [],
  totalCount: 0,
  pageSize: 10,
  currentPage: 1
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
    default:
      break;
  }

  return state;
}

export const followAC = (userId) => ({ type: FOLLOW, userId: userId });

export const unfollowAC = (userId) => {
  return { type: UNFOLLOW, userId: userId };
}

export const setUsersAC = (usersPage) => {
  return { type: SET_USERS, usersPage };
}

export const setCurrentAC = (pageNumber) => {
  return {type: SET_CURRENT, page: pageNumber};
}

export default usersReducer;