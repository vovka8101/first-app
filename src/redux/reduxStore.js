import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogs: dialogsReducer,
  navbar: navbarReducer,
  usersPage: usersReducer
});

let store = createStore(reducers);
// window.state = store;
export default store;