import React from 'react';

import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (    
    <div>
      <div>
        <img  
          src="https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"></img>
      </div>
      <div className={s.descriptionBlock}>
        description
      </div>
        
       
    </div>
  )
}


export default ProfileInfo
