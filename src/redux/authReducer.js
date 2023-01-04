const SET_USER_AUTH = 'SET_USER_AUTH';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false  
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    default:
      return state;
  }
}

export const setUserAuth = (id, email, login) => ({
  type: SET_USER_AUTH,
  data: {id, email, login}
});

export default authReducer;