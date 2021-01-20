export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
export const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState={ 
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
  ],
  newMessageBody:''
}

 const dialogsReducer = (state =initialState, action) => {  
  switch(action.type){
    case UPDATE_NEW_MESSAGE_BODY:
      return{        
        ...state,
       newMessageBody : action.body      
    }
    case SEND_MESSAGE: {  
      debugger;    
      let body = state.newMessageBody;
     return{
        ...state,
        newMessageBody :'',
        messagesData:[...state.messagesData, {id:6, message:body}]
      }; 
    }
    default:
      return state;
  }  
}
          
//actionCreators

export const updateNewMessageBodyActionCreator = (body) => ({ type:UPDATE_NEW_MESSAGE_BODY , body:body});

export const sendMessageActionCreator = () => ({ type:SEND_MESSAGE  });

export default dialogsReducer;