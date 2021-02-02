import React from 'react';

import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
  console.log('ProfileInfo props:', props)  
  if (!props.profile ){
    return <Preloader />
  }
  
  return (
    <div>
      <div>
        <img  
          src="https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"></img>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large}></img>
      </div>
      <div>{props.profile.fullName}</div>
      <div>{props.profile.lookingForAJob}</div>
      <div>{props.profile.contacts.github}</div>
      <div>{props.profile.contacts.instagram}</div>
    </div>
  );
};

export default ProfileInfo;
