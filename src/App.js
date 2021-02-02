import './App.css';

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import MainContentContainer from './components/MainContent/MainContentContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';


function App(props) { 
  return (
    <BrowserRouter>
      <div className ="app">
        <HeaderContainer />  
        <div className="app-wrapper-content">
          <Navbar />  
          <div className="main-content"> 
            <Route path="/profile/:userId?" render={() => {
              return(
                <MainContentContainer  />
              )}
            }/>
            <Route path="/dialogs" render={() => <DialogsContainer  />}/>  
            <Route path="/news" render ={() => <News />}   />
            <Route path="/settings" render ={() => <Settings />}   />
            <Route path="/users" render ={() => <UsersContainer />}   />
          </div>  
        </div>   
      </div>
    </BrowserRouter>   
  );
}


export default App;
