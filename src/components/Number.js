import React from 'react';
import { pow2,sqrt3 } from '../redux/number/numberAction';
import { useDispatch, useSelector } from 'react-redux';

const Number = () => {
    const dispatch = useDispatch();
    const number = useSelector(state => state.numberState.number);
    return (
        <div>
            <h1>Number : {number}</h1>
            <button onClick={()=>dispatch(pow2())}>&#8743; 2</button>
            <button onClick={() => dispatch(sqrt3())}>&#8730;</button>
            
        </div>
    );
};



export default Number;
