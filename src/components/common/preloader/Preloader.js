import React from 'react';

import preloader from '../../../assets/images/spinner.gif';

const Preloader = () => {
  return (
    <div>
      <div style={{backgroundColor: 'white'}}>
        <img  src={preloader} />
      </div> 
    </div>
  )
}

export default Preloader
