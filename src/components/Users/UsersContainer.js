import React from 'react';
import { connect } from 'react-redux';

import {
  follow,
  getUsersThunkCreator,
  setCurrentPage,
  toggleIsFollowingProgress,
  unfollow,
} from '../../redux/users-reducer';
import Preloader from '../common/preloader/Preloader';
import Users from './Users';


class UsersContainer extends React.Component {  
  componentDidMount(){
    this.props.getUsers(this.props.currentPage, this.props.pageSize);    
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);   
  }
  
  render(){
   console.log('PROPS:' , this.props);
   return <>    
    {this.props.isFetching ? <Preloader /> : null}
    <Users totalUsersCount ={this.props.totalUsersCount}
          pageSize = {this.props.pageSize}
          currentPage = {this.props.currentPage}
          onPageChanged = {this.onPageChanged}
          users = {this.props.users}
          unfollow = {this.props.unfollow}
          follow = {this.props.follow}       
          followingInProgress = {this.props.followingInProgress}
          />   
    </>
  } 
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize:state.usersPage.pageSize,
    totalUsersCount:state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
};

export default connect (mapStateToProps,
               {follow, unfollow,  
               setCurrentPage,   
               toggleIsFollowingProgress, getUsers: getUsersThunkCreator})(UsersContainer);

