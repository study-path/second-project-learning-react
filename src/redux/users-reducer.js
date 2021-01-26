export const FOLLOW = 'FOLLOW';
export const UNFOLLOW='UNFOLLOW';
export const SET_USERS = 'SET_USERS';

let initialState = {
  users:[
    // {
    //   id:1, 
    //   followed:false,
    //   photo:'data:image/jpeg;base64,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',
    //   fullName:'Lili', 
    //   status:'I am a boss', 
    //   location:{
    //     city:'Toronto',
    //     country:'Canada'
    //   }
    // },
    // {
    //   id:2, 
    //   followed:false,
    //   photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVWZDaa2qQe-nW1eMPhzkjaiwPC6FpLWP3rA&usqp=CAU',
    //   fullName:'Nelli', 
    //   status:'I am a student', 
    //   location:{
    //     city:'Kiev',
    //     country:'Ukraine'
    //   }
    // },
    // {
    //   id:3, 
    //   followed:true,
    //   photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY4hsdqhHoAL6velWmlhzLzu_XDVLs3g9cZA&usqp=CAU',
    //   fullName:'Max', 
    //   status:'I am a enterpreneur', 
    //   location:{
    //     city:'New York',
    //     country:'USA'
    //   }
    // }
  ]
}


export const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case FOLLOW:
      return {
        ...state, 
        users:state.users.map(u =>{
          if(u.id === action.userId){
            return{...u, followed: true}
          }
          return u;
        })
    }
    case UNFOLLOW:
      return {
        ...state, 
        users:state.users.map(u =>{
          if(u.id === action.userId){
            return{...u, followed: false}
          }
          return u;
        })
    }
    case SET_USERS:{
      return {...state, users:[...state.users, ...action.users]}
    }
    default:
    return state;
  }
}


export const followActionCreator= (userId) => ({ type:FOLLOW,   userId})

export const unfollowActionCreator = (userId)=>({  type:UNFOLLOW,  userId})

export const setUsersActionCreator = (users) => ({type: SET_USERS, users})