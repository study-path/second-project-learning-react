import React from 'react';

import userPhoto from '../../assets/images/user.png';
import styles from './users.module.css';


const Users = (props) => {  
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);  

  let pages = [];
  for(let i=1; i < pagesCount; i++){
    pages.push(i);
  }
  return (
    <div>
      <div>         
        {pages.map( (page) => {
          return(
            <span 
              className={props.currentPage === page && styles.selectedPage} 
              onClick={(e) => {props.onPageChanged(page);}}> {page} 
            </span>
          )                                     
        })}        
      </div>
        {
          props.users.map( (user) => <div key={user.id}> 
            <span>
              <div>
                <img 
                 src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto}
                />             
              </div> 
              <div>
                {user.followed 
                  ? <button onClick={ () => {this.props.unfollow(user.id)}}> Unfollow </button>   
                  : <button onClick={ () => {this.props.follow(user.id)}}>Follow</button>}  
              </div>
            </span>
            <span>
              <span>
                <div>{user.name}</div>
                <div>{user.status}</div>               
              </span>
              <span>
                <div>{"user.location.city"}</div>
                <div>{"user.location.coumtry"}</div>
              </span>
            </span>   
          </div>
      )}
    </div>
  )
}

export default Users
