import { authAPI } from "../api/UsersApi";

const SET_USER_AUTH = 'SET_USER_AUTH';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL'; 

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH:
    case SET_CAPTCHA_URL:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
};


export const setUserAuth = (id, email, login, isAuth) => ({
  type: SET_USER_AUTH,
  payload: { id, email, login, isAuth }
});

const setCaptchaUrl = (captchaUrl) => ({
  type: SET_CAPTCHA_URL,
  payload: { captchaUrl }
})


export const userAuth = () => {
  return async (dispatch) => {
    const data = await authAPI.userAuth();
    
    if (data.resultCode === 0) {
      const { id, email, login } = data.data;
      dispatch(setUserAuth(id, email, login, true));
    } else {
      // console.log(data.messages);
    }
  }
};

export const login = ({ email, password, rememberMe, captcha=null }, setStatus) => {
  return async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
      dispatch(userAuth());
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptcha());
      }
      setStatus(response.data.messages);
    }
  }
};

export const getCaptcha = () => async (dispatch) => {
  const response = await authAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;

  if (captchaUrl) {
    dispatch(setCaptchaUrl(captchaUrl));
  } else {
    console.log('No captcha url was received');
  }
}

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(setUserAuth(null, null, null, false));
  } else {
    console.log('error while logout', response.data.messages);
  }
};

export default authReducer;