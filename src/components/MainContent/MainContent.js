import React from 'react';

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const MainContent = (props) => {

  return (
    <div >
      <ProfileInfo />
      <MyPosts data={props.profilePage.postsData} 
               addPost={props.addPost} 
               newPostText = {props.profilePage.newPostText}
               updateNewPostText={props.updateNewPostText}/>
    </div>
  )
}

export default MainContent
