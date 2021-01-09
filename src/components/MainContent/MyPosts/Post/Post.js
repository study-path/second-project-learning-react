import React from 'react';



const Post = (props) => {
  return (
    <div>     
      {props.message} {props.likesCount} like
    </div>
    
  )
}

export default Post
