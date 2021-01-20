import React from 'react';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const MainContent = (props) => {

  return (
    <div >
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  )
}

export default MainContent
