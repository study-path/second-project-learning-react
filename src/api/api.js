import axios from 'axios';
import React from 'react';


const instance = axios.create({
  withCredentials: true, 
  baseURL : 'https://social-network.samuraijs.com/api/1.0/',
  headers:{'API_KEY':'5f23cb6d-e3a7-4d93-a53c-f57e9a5adf2a'}
})

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data) ;        
  },  
  followUser(userId) {
    return instance.post(`/follow/${userId}`, {})
  },
  unFollowUser(userId) {
    return instance.delete(`${userId}`)    
  },
  getProfile(userId){
    return instance.get(`/profile/` + userId)
      .then( response => {
        this.props.setUserProfile(response.data)
      })
  }
} 


export const authAPI = {
  getAuthMe() {
    return instance.get(`/auth/me`)
  },
}


 
