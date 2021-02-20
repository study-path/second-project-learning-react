import axios from 'axios';
import React from 'react';

const instance = axios.create({
  withCredentials: true, 
  baseURL : 'https://social-network.samuraijs.com/api/1.0',
  headers: {
    'API_KEY':'a3d6046e-3b65-4188-8214-7e4e0bd24e85'
  }
});

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
  }
};

export const authAPI = {
  getAuthMe() {
    return instance.get(`/auth/me`);
  }
};