import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  navbar: navbarReducer,
  users: usersReducer
});

let store = createStore(reducers);

export default store;