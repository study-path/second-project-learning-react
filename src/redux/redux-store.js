import authReducer from './auth-reducer';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReduced from './sidebar-reduser';
import { usersReducer } from './users-reducer';



const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReduced,
  usersPage: usersReducer,
  auth:authReducer
});


let store = createStore(reducers);
window.store = store;

export default store;