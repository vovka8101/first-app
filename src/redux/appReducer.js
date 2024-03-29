import { userAuth } from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

const initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true
      }
    default:
      return state;
  }
}

export const setInitialized = () => ({ type: SET_INITIALIZED });

export const initializeApp = () => {
  return (dispatch) => {
    const promise = dispatch(userAuth());

    // Promise.all([promise]).then( ... ) if more than one promise
    // Can also use async await...
    promise.then(() => {
      dispatch(setInitialized());
    });
  }
};

export default appReducer;