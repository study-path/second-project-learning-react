import './App.css';
import './App.css';
import './App.css';

import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className ="app">
      <Header /> 
      <div className="container">
        <Navbar />
        <MainContent />    
      </div>    
       
      <Footer />
    </div>
  );
}


export default App;
