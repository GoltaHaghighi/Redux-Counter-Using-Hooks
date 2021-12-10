import React from 'react';
import { increase } from '../redux/counter/counterAction';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    return (
        <div>
            <h1>Counter : {counter}</h1>
            <button onClick={()=>dispatch(increase())}>+</button>
            
        </div>
    );
};



export default Counter;