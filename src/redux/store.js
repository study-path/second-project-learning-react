import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReduced from './sidebar-reduser';

let store = {
  _state :{    
  _callSubscriber() {
    console.log("state changed");
  },
  getState(){
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },  
  dispatch(action){   
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReduced(this._state.sidebar, action);
    
    this._callSubscriber(this._state);        
  },
} 
}
    
export default store;
window.store= store;