import React from 'react';

import d from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={d.dialogs}>
      <div className={d.dialogItems}>
        <div className={d.dialog + ' ' + d.active}>Lili</div>
        <div className={d.dialog}>Nelli</div>
        <div className={d.dialog}>Oleg</div>
        <div className={d.dialog}>Dima</div>
      </div>
      <div className={d.messages}>
        <div className={d.message}>HO ho</div>
        <div className="message">Message 2</div>
        <div className="message">Message 3</div>
        <div className="message">Message 4</div>
      </div>
    </div>
  )
}

export default Dialogs
