import { usersAPI } from './../api/api';

export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
let initialState = {
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
  newPostText:'new post',
  profile:null
}

const profileReducer = (state=initialState, action) => { 
  switch(action.type){
      case ADD_POST:{
        let newPost = {
          id:5,
          message: state.newPostText,
          likesCount:0
        };
       return {
         ...state,
         postsData : [...state.postsData, newPost],
         newPostText : ''
        }
      }
      case UPDATE_NEW_POST_TEXT:{
        return {...state,
          newPostText : action.newText
        };      
      }  
      case SET_USER_PROFILE: {
        return {
          ...state,
          profile: action.profile
        };
      }
      default:
      return state;
      
  }  
}


//actionCreators
export const addPostActionCreator = () => ({ type:ADD_POST });

export const updateNewPostTextActionCreator = (text) =>{
  return {
    type:UPDATE_NEW_POST_TEXT,
    newText:text
  }
};

export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile});
export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId)    
      .then( response => {
        dispatch(setUserProfile(response.data));
      });
}

export default  profileReducer;