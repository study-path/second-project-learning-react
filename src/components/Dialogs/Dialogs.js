import React from 'react';

import DialogItem from './DialogItem/DialogItem';
import d from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {  

  let dialogsElements = props.state.dialogsData.map((dialog) => {
    return(
      <DialogItem name={dialog.name} id={dialog.id} />
    ) 
  })

  let messagesElements = props.state.messagesData.map((message) => <Message text = {message.text} /> )

  return (
    <div className={d.dialogs}>
      <div className={d.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={d.messages}>       
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs
