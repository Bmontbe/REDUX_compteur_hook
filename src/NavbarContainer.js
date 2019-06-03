import React, {Component} from 'react';
import {connect} from 'react-redux'; // IMPORTANT REDUX
import CounterComponent from './CounterContainer';
import './App.css';

function Navbar(props) {
    return (
      <div>
        <nav className='Navbar'>{props.counter}</nav>
      </div>
    );
  }

const mapStateToProps = state => ({
  counter : state
});

const NavbarContainer = connect(mapStateToProps) (Navbar)

export default NavbarContainer;