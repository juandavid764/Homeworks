import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementBy,
  decrementBy,
  increment,
  decrement,
} from "../store/slices/CounterSlice.jsx";

export const CounterInput = ({ numbers, setReLoad }) => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (e) => {
    setInputValue(Number(e.target.value));
  };

  const handleIncrementBy = () => {
    dispatch(incrementBy(inputValue));
  };

  const handleDecrementBy = () => {
    dispatch(decrementBy(inputValue));
  };

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleAdd = () => {
    numbers.push(inputValue);
    setReLoad((prev) => !prev);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-2xl shadow-md space-y-6">
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Counter: {count}
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={handleIncrement}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-xl transition"
        >
          +1
        </button>
        <button
          onClick={handleDecrement}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-xl transition"
        >
          -1
        </button>
        <button
          onClick={handleIncrementBy}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-xl transition col-span-2"
        >
          Increment by {inputValue}
        </button>
        <div className="flex justify-center items-center col-span-2">
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter a value"
            className="px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 w-full max-w-xs"
          />
        </div>

        <button
          onClick={handleDecrementBy}
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-xl transition col-span-2"
        >
          Decrement by {inputValue}
        </button>
      </div>

      <div className="flex justify-center items-center gap-4">
        <button
          onClick={handleAdd}
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-xl transition"
        >
          Add
        </button>
      </div>
    </div>
  );
};
