import React from 'react';

import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
  
  let postElements = props.data.map( (post) => {
    return(
      <Post message={post.message} likesCount={post.likesCount}/>
    )}
  )

  let newPostElement = React.createRef();

  let addPost = () => {        
      props.dispatch(addPostActionCreator());        
  };


  let onPostChange  = () => {
    let text = newPostElement.current.value;
    //let action = {type:'UPDATE-NEW-POST-TEXT', newText:text};
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }
  
  return (
    <div className={s.postBlock}>
       <h3>My posts</h3>
        <div>
          <div>
            <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
          </div>
          <div>
            <button onClick={addPost}>Add post </button>
          </div>       
        </div>
      <div className={s.posts}>
        {postElements}     
      </div>
    </div>
  )
}

export default MyPosts
