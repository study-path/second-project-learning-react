import React from 'react';

import DialogItem from './DialogItem/DialogItem';
import d from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {  

  let state = props.dialogsPage;

  let dialogsElements = state.dialogsData.map((dialog) => {
    return(
      <DialogItem key= {dialog.id} name={dialog.name} id={dialog.id} />
    ) 
  });  
  let messagesElements = state.messagesData.map((message) => <Message key= {message.id} text = {message.text} /> );
 
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;  
    props.updateNewMessageBody(body);   
  };

  
  return (
    <div className={d.dialogs}>
      <div className={d.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={d.messages}>       
        <div>{messagesElements}</div>
        <div>
          <div><textarea value={newMessageBody} onChange= {onNewMessageChange} placeholder="Enter your message"></textarea></div>
          <div><button onClick={onSendMessageClick}>Send</button></div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
