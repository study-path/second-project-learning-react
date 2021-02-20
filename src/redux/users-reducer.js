import { usersAPI } from '../api/api';

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW='UNFOLLOW';
export const SET_USERS = 'SET_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
  users: [],
  pageSize: 25,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress :[]
};

export const usersReducer = (state = initialState, action) => {
  console.log("state", state);
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
      return {...state, users: action.users}
    }
    case SET_CURRENT_PAGE:{
      return{
        ...state,
        currentPage : action.currentPage
      }
    } 
    case SET_TOTAL_USERS_COUNT:{
      return{
        ...state, 
        totalUsersCount: action.count
      }
    }
    case TOGGLE_IS_FETCHING:{
      return{
        ...state,
        isFetching: action.isFetching
      }
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS:{
      return{
        ...state,
        followingInProgress: action.isFatching 
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id != action.userId)
      }
    }
    default:
    return state;
  }
}


export const followSuccess = (userId) => ({ type:FOLLOW,   userId})

export const unfollowSuccess = (userId)=>({  type:UNFOLLOW,  userId})

export const setUsers = (users) => ({type: SET_USERS, users})

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})

export const setToggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const toggleIsFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching}, userId);


export const getUsersThunkCreator = (currentPage, pageSize) => {
  return  (dispatch) => {
    dispatch(setToggleIsFetching(true));  
    usersAPI.getUsers(currentPage, pageSize)
      .then(data => {       
        dispatch(setToggleIsFetching(false));      
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount))
    });
  }
}

export const follow = (userId) => {
  return  (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    usersAPI.followUser(userId)
      .then(response => { 
        if(response.data.resultCode == 0){
          dispatch(followSuccess(userId));
        }
        dispatch(toggleIsFollowingProgress(false, userId));
      });  
  }
}

export const unfollow = (userId) => {
  return  (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    usersAPI.unFollowUser(userId)
      .then(response => { 
        if(response.data.resultCode == 0){
          dispatch(unfollowSuccess(userId));
        }
        dispatch(toggleIsFollowingProgress(false, userId));
      });  
  }
}