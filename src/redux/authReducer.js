import { usersData } from "../api/UsersApi";

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
  data: { id, email, login }
});

export const userAuth = () => {
  return (dispatch) => {
    usersData.userAuth().then(data => {
      if (data.resultCode === 0) {
        const { id, email, login } = data.data;
        dispatch(setUserAuth(id, email, login));
      } else {
        console.log(data.messages);
      }
    });
  }
}

export default authReducer;