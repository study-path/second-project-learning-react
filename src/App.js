import './App.css';

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';





function App() {
  return (
    <BrowserRouter>
      <div className ="app">
        <Header />  
        <div>
          </div>        
        <Navbar />  
        <div className="app-wrapper-content"> 
          <Route path="/main-content" component={MainContent}/>
          <Route path="/dialogs" component={Dialogs}/>       
          <Route path="/news" component={News}   />
          
        </div>    
      </div>
    </BrowserRouter>
   
  );
}


export default App;
