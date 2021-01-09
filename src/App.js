import './App.css';

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';




function App(props) {
  console.log("gtrfdhytfjhytfjhytyuj " , props);
  return (
    <BrowserRouter>
      <div className ="app">
        <Header />  
        <div className="app-wrapper-content">
          <Navbar />  
          <div className="main-content"> 
            <Route path="/main-content" render={() => {
              return(
              <MainContent profilePage={props.appState.profilePage} 
                           addPost={props.addPost}
                           updateNewPostText = {props.updateNewPostText}
                           />)}
            }/>
            <Route path="/dialogs" render={() => <Dialogs state={props.appState.dialogsPage} />}/>  
            <Route path="/news" render ={() => <News />}   />
          </div>  
        </div>   
      </div>
    </BrowserRouter>
   
  );
}


export default App;
