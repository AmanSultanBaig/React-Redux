import React from 'react';
import './App.css';

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, add_user, remove_user } from './actions/index'

function App() {
  const counter = useSelector(state => state.CounterReducer)
  const user = useSelector(state => state.UserReducer)

  const dispatch = useDispatch()

  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>+</button>
      {counter}
      <button onClick={() => dispatch(decrement())}>-</button> 
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App;
