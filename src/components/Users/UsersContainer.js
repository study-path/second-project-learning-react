import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';

import {
  follow,
  setCurrentPage,
  setToggleIsFetching,
  setTotalUsersCount,
  setUsers,
  unfollow,
} from '../../redux/users-reducer';
import Preloader from '../common/preloader/Preloader';
import Users from './Users';


class UsersContainer extends React.Component {    

  componentDidMount(){
    this.props.setToggleIsFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)    
      .then(response => { 
        this.props.setToggleIsFetching(false);      
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount)
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setToggleIsFetching(true);   
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)    
      .then(response => {
        this.props.setToggleIsFetching(false);   
      this.props.setUsers(response.data.items);     
  });
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
                follow = {this.props.follow} />   
    </>
  } 
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize:state.usersPage.pageSize,
    totalUsersCount:state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
};

export default connect (mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleIsFetching})(UsersContainer);

