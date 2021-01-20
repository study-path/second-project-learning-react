import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Navbar.module.css';

const Navbar = () => {
  return ( 
      <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to="/main-content" activeClassName={s.activeLink}> MainContent</NavLink>
        </div>
        <div className={s.item}>       
          <NavLink to="/settings" activeClassName={s.activeLink}> Settings</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/news" activeClassName={s.activeLink}> News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs" activeClassName={s.activeLink}> Dialogs</NavLink>
        </div>      
      </nav> 
  )
}

export default Navbar
