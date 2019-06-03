import React, {Component} from 'react';
import {connect} from 'react-redux'; // IMPORTANT REDUX
import './CounterComponent.css';

function CounterComponent (props) {
  // ACTIONS
const addAction = {
  type: 'ADD',
};

const removeAction = {
  type: 'REMOVE',
};

const add10Action = {
  type: 'ADD10',
};

const remove10Action = {
  type: 'REMOVE10',
};

const resetAction = {
  type: 'RESET',
};

    return (
      <div className = "blockCounter">
        <p>{props.counter}</p>
        <button onClick={() => props.dispatch (addAction)}>+1</button>
        <button onClick={() => props.dispatch (removeAction)}>-1</button>
        <button onClick={() => props.dispatch (add10Action)}>+10</button>
        <button onClick={() => props.dispatch (remove10Action)}>-10</button>
        <button onClick={() => props.dispatch (resetAction)}>RESET</button>
      </div>
    );
  }

const mapStateToProps = state => ({
  counter : state
});

const CounterContainer = connect(mapStateToProps) (CounterComponent)

export default CounterContainer;