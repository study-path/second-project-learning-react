import * as axios from 'axios';
import React from 'react';

import userPhoto from '../../assets/images/user.png';
import styles from './users.module.css';


class Users extends React.Component {  
  componentDidMount(){
    axios.get('https://social-network.samuraijs.com/api/1.0/users')    
      .then(response => {
      this.props.setUsers(response.data.items);
  });
  }
  render(){
    return (
      <div>  
        <div>
          <span className={styles.selectedPage}>1</span>
          <span>2</span>
          <span>3</span> 
        </div>     
        {
          this.props.users.map( (user) => <div key='user.id'> 
            <span>
              <div>
                <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto}/>             
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
}
export default Users
