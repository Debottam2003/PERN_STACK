import React from 'react'
import { useState } from 'react';
function Counter() {
    // let array = useState(0);
    // let value = array[0];
    // let setValue = array[1];
    let [value, setValue] = useState(0);
    function decrement(){
        if(value > 0)
        setValue((prevValue)=> (prevValue - 1));
    }
    function reset(){
        setValue(0);
    }
    function increment(){
        if(value < 11)
        setValue((prevValue)=> (prevValue + 1));
    }
  return (
    <div>Counter
        <h2 style={{color : "white"}}>{value}</h2>
        <button onClick={decrement} style={{color : "white"}}>Decrement</button>
        <button onClick={reset} style={{color : "white"}}>Reset</button>
        <button onClick={increment} style={{color : "white"}}>Increment</button>
    </div>
  )
}

export default Counter;