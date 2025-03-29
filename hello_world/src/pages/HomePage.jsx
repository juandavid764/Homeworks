import React, { useState, useEffect } from "react";

import { Stack } from "../Models/Stack.js";

import { Form } from "../components/Form.jsx";
import { View } from "../components/View.jsx";
import { CounterInput } from "../components/CounterInput.jsx";

export const HomePage = () => {
  const [numbers, setNumbers] = useState(new Stack());
  const [reLoad, setReLoad] = useState(false);
  console.log("Data numbers from HomePage", numbers.items);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>

      <div className="flex ">
        <CounterInput numbers={numbers} setReLoad={setReLoad} />
        <View numbers={numbers} />
      </div>
    </div>
  );
};
