import React from 'react';

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const MainContent = (props) => {

  return (
    <div >
      <ProfileInfo />
      <MyPosts data={props.profilePage.postsData} 
               dispatch={props.dispatch} 
               newPostText = {props.profilePage.newPostText}
      />
    </div>
  )
}

export default MainContent
