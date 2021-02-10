// import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import counter from "../redux/counter";
import { RootState } from "../redux";

const Counter = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state: RootState) => state.counter);

  return (
    <div>
      {value}
      <br />
      <button
        onClick={(event) => {
          dispatch(counter.actions.increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={(event) => {
          dispatch(counter.actions.decrement());
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
