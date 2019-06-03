import React, {Component} from 'react';
import CounterComponent from './CounterContainer';
import Navbar from './NavbarContainer';
import './App.css';

function App () {

    return (
      <div>
        <Navbar/> 
        <CounterComponent/>
      </div>
    );
  }

export default App;