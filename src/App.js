import './App.css';

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';


function App(props) {
  console.log("APPPPPPPPPPPPPPPPPPPP " , props);
  return (
    <BrowserRouter>
      <div className ="app">
        <Header />  
        <div className="app-wrapper-content">
          <Navbar />  
          <div className="main-content"> 
            <Route path="/main-content" render={() => {
              return(
                <MainContent  />
              )}
            }/>
            <Route path="/dialogs" render={() => <DialogsContainer  />}/>  
            <Route path="/news" render ={() => <News />}   />
            <Route path="/settings" render ={() => <Settings />}   />
          </div>  
        </div>   
      </div>
    </BrowserRouter>   
  );
}


export default App;
