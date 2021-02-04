import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Header.module.css';

const Header = (props) => { 
  return (
    <div className={s.div}>
      <header >      
        <img className={s.img}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrPotIEiUTbNLUNoJE5gAdjdirbVcFSvLFvg&usqp=CAU"></img>
      <div className= {s.loginBlock}>
        {props.isAuth ? props.login :
          <NavLink to={"/login"}>Login</NavLink>}
      </div>
      </header>
     
    </div>
  )
}

export default Header
