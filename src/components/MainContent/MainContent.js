import React from 'react';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const MainContent = (props) => {
  console.log("MainContent props", props);
  return (
    <div>
      <ProfileInfo  profile={props.profile} status= {props.status} updateStatus={props.updateStatus} />
      <MyPostsContainer />
    </div>
  )
}

export default MainContent
