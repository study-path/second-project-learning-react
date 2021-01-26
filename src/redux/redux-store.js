import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReduced from './sidebar-reduser';
import { usersReducer } from './users-reducer';



const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReduced,
  usersPage: usersReducer
});


let store = createStore(reducers);
window.store = store;

export default store;