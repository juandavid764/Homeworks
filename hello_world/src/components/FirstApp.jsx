import { useState } from "react";

const FirstApp = ({ title, value = 0 }) => {
  const [contador, setContador] = useState(value);

  const handleSubstract = () => {
    setContador(contador - 1);
  };

  const handleAdd = () => {
    setContador(contador + 1);
  };

  const handleReset = () => {
    setContador(value);
  };

  return (
    <div className="bg-black h-screen w-screen m-0"> 
      <div className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <div className="bg-gray-900 text-white p-4">
        <span className="text-xl">{contador}</span>
        <div className="mt-4">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={handleSubstract}
          >
            Substract
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstApp;