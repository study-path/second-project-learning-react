import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import state, { addPost, subscribe, updateNewPostText } from './redux/state';


let rerenderEntireTree = (state) =>{
  ReactDOM.render(
    <React.StrictMode>
      <App  appState={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);
