import axios from 'axios';
import React from 'react';

const instance = axios.create({
  withCredentials: true, 
  baseURL : 'https://social-network.samuraijs.com/api/1.0',
  headers: {
    'API_KEY':'c23a54e2-b76b-4cc5-b81f-b5427337e8b8'
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
    console.warn("Please use profileAPI object.");  
    return profileAPI.getProfile(userId);
  }
};

export const profileAPI = { 
  getProfile(userId){
    return instance.get(`/profile/` + userId)     
  },
  getStatus(userId){
    return instance.get(`profile/status/` + userId)
  },
  updateStatus(status){
    return instance.put('profile/status', {status:status})
  }
};

export const authAPI = {
  getAuthMe() {
    return instance.get(`/auth/me`);
  }
};