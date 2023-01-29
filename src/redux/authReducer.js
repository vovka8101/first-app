import { authAPI } from "../api/UsersApi";

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
        ...action.data
      }
    default:
      return state;
  }
}

export const setUserAuth = (id, email, login, isAuth) => ({
  type: SET_USER_AUTH,
  data: { id, email, login, isAuth }
});

export const userAuth = () => {
  return (dispatch) => {
    authAPI.userAuth().then(data => {
      if (data.resultCode === 0) {
        const { id, email, login } = data.data;
        dispatch(setUserAuth(id, email, login, true));
      } else {
        // console.log(data.messages);
      }
    });
  }
};

export const login = ({ email, password, rememberMe }, setStatus) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(userAuth());
      } else {
        setStatus(response.data.messages);
      }
    });
  }
}

export const logout = () => (dispatch) => {
  authAPI.logout().then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setUserAuth(null, null, null, false));
    } else {
      console.log('error while logout', response.data.messages);
    }
  })
}

export default authReducer;