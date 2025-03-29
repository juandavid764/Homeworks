import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementBy } from "../store/slices/CounterSlice.jsx";

export const CounterInput = ({numbers, setReLoad}) => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter); // Obtener el estado actual del contador
  const [inputValue, setInputValue] = useState(0); // Estado local para el valor ingresado por el usuario

  const handleInputChange = (e) => {
    setInputValue(Number(e.target.value)); // Convertir el valor ingresado a número
  };

  const handleIncrementBy = () => {
    dispatch(incrementBy(inputValue)); // Despachar la acción con el valor ingresado
  };

  const handleAdd = () => {
    numbers.push(inputValue); // Agregar el valor ingresado al stack
    setReLoad((prev) => !prev); // Actualizar el estado para forzar la recarga
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a value"
      />
      <button onClick={handleIncrementBy}>Increment by Value</button>
      <button onClick={handleAdd}>Addd</button>
    </div>
  );
};