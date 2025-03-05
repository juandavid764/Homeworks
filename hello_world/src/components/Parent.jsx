import React, { useState, useCallback } from "react";

import { Son } from "./Son";

export const Father = () => {
  const list = [2, 4, 6, 8, 10];

  const [valor, setValor] = useState(0);

  const increment = useCallback((num) => {
    setValor(prev => prev + num)
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Father</h1>

      <p className="text-lg mb-4">Total: {valor}</p>

      <hr className="mb-4" />

      <div className="space-y-2">
        {list.map((n, idx) => {
          return <Son key={idx} numero={n} increment={increment} />;
        })}
      </div>
    </div>
  );
};

