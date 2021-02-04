import thunkMiddleware from 'redux-thunk';

import authReducer from './auth-reducer';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReduced from './sidebar-reduser';
import { usersReducer } from './users-reducer';


const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReduced,
  usersPage: usersReducer,
  auth:authReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;