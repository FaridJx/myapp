import React from 'react'
import { useDispatch } from 'react-redux';
import { increment } from '../reducers/counter';
import { incrementByAmount} from '../reducers/counter';
import { decrement} from '../reducers/counter';

function CounterButton() {

    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(increment());
    }

    const handleDecrement = () => {
        dispatch(decrement());
    }

    const handleIncrementByAmount = () => {
        dispatch(incrementByAmount(10));
    }


  return (
    <div>
        <button onClick={() => handleIncrement()}>+</button>
        <button onClick={() => handleDecrement()}>-</button>
        <button onClick={() => handleIncrementByAmount()}>add5</button>

    </div>
  )
}

export default CounterButton;