import React from 'react';

import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      <Post message="Hi, how are you?"/>
      <Post message="It's a first message"/>
      <Post message="This is the second message" like="10"/>
      <Post like="15"/>
      <Post />
      
    </div>
  )
}

export default MyPosts
