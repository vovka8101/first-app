const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'


let initialState = {
  users: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        users: state.users.map(el => {
        return (el.id === action.userId) 
        ? {...el, followed: true }
        : {...el}
        })
      }
    case UNFOLLOW:
      return {
        users: state.users.map(el => {
        return (el.id === action.userId) 
        ? {...el, followed: false }
        : {...el}
        })
      }
    case SET_USERS:
      return {
        users: [...action.users.users]
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

export const setUsersAC = (users) => {
  return { type: SET_USERS, users: users };
}


export default usersReducer;