import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import thunkMiddlware from "redux-thunk";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogs: dialogsReducer,
  navbar: navbarReducer,
  usersPage: usersReducer,
  auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddlware));
// window.state = store;
export default store;