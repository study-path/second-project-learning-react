let rerenderEntireTree  =() => {
  console.log("state changed");
}

let state = {
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
};


export const addPost = () => {
  let newPost = {
    id:5,
    message: state.profilePage.newPostText,
    likesCount:0
  };
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree();
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree();
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}
  
  
  
export default state;