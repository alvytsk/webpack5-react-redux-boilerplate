import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../state/counterSlice';
import { RootState } from '../state';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-wrapper">
      <div className="counter-value">{count}</div>
      <div className="buttons-block">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
