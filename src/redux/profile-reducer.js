export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


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
  newPostText:'new post'
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

export default  profileReducer;