
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
  _state :{
    profilePage:{
      postsData:[
        {
          id:1, 
          message:"Hi, how are you bro?",
          likesCount:0
        },    
        {
          id:2,
          message:"It's a first message.",
          likesCount:20
        },
        {
          id:3,
          message:"This is the second message.",
          likesCount:5
        }
      ],
      newPostText:'new post'
    },
    dialogsPage:{
      dialogsData : [
        { id:1, name:'Lili'},
        { id:2, name:'Nelli'}, 
        { id:3, name:'Vasya'},
        { id:4, name:'Oleg'},
        { id:5, name:'Igor'}
      ],
      messagesData : [
        { id:1, text:"Ho ho ho"},
        { id:2, text:"Message 2"},
        { id:3, text:"Message 3"},
        { id:4, text:"Message 4"}
      ]
    }
  },
  _callSubscriber() {
    console.log("state changed");
  },
  getState(){
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },  
  dispatch(action){                    //{type:'ADD-POST'}
    if(action.type===ADD_POST){
      let newPost = {
        id:5,
        message: this._state.profilePage.newPostText,
        likesCount:0
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } 
    else if(action.type === UPDATE_NEW_POST_TEXT){
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};  

export const addPostActionCreator = () => ({ type:ADD_POST });

export const updateNewPostTextActionCreator = (text) =>{
  return {
    type:UPDATE_NEW_POST_TEXT,
    newText:text
  }
};
    
export default store;
window.store= store;