import React, { useState } from 'react';
import { increase,decrease } from '../redux/counter/counterAction';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
    const [value, setValue] = useState(1);
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counterState.counter);
    return (
        <div>
            <h1>Counter : {counter}</h1>
            <input type="text" value={value} onChange={(event)=>setValue(event.target.value)} placeholder='Increasing size'/> 
            <button onClick={()=>dispatch(increase(Number(value)))}>+</button>
            <button onClick={() => dispatch(decrease(Number(value)))}>-</button>
            
        </div>
    );
};



export default Counter;