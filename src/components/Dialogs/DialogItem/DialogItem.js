import React from 'react';
import { NavLink } from 'react-router-dom';

import d from './../Dialogs.module.css';

const DialogItem = (props) => {
  return(
    <div className={d.dialog + ' ' + d.active}>
    <NavLink to={"/dialogs/" + props.id}> {props.name}</NavLink>
  </div>
  )
}




export default DialogItem
