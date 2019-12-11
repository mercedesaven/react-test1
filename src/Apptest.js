import React from 'react';
//import {BrowserRouter as Router, Route } from 'react-router-dom' 
//import Otro from './Otro'

const algo = {
  name:'merchy', 
  text:'probando react'
}

function Apptest(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src='https://ichef.bbci.co.uk/news/410/cpsprodpb/15665/production/_107435678_perro1.jpg' className="App-logo" alt="logo" />
        <p>Hola aca todo bien. </p>
        <a
          className="App-link"
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Entra a facebook
        </a>
      <p>{algo.name}</p>
      <p>{algo.text}</p>
      </header>
      
    </div>
    
  );
}

export default Apptest;
