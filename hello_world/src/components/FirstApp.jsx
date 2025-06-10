import { useState } from "react";

const FirstApp = () => {
  const [counter, setCounter] = useState(30);

  const  increment = () => {
    setCounter(counter + 1);
  }

  const  decrement = () => {
    setCounter(counter - 1);
  }

  return (
    <>
      <h2>Counter: {counter}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </>
  );
}

FirstApp.defaultProps = {
  title: 'No hay titulo',
  sum: 300
}

export default FirstApp;