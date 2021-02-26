import React from 'react';

import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {  
  if (!props.profile ){
    return <Preloader />
  }
  
  return (
    <div>   
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large}></img>
        <ProfileStatus  status={props.status} updateStatus={props.updateStatus}/>
      </div>
      {/* <div>{props.profile.fullName}</div>
      <div>{props.profile.lookingForAJob}</div>
      <div>{props.profile.contacts.github} </div>
      <div>{props.profile.contacts.instagram}</div> */}
    </div>
  );
};

export default ProfileInfo;
