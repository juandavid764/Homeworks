import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFirebaseData, addDataToFirebase } from "../store/slices/thunks.js";

export const DataComponent = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.firebase);
  const [message, setMessage] = useState("");

  useEffect(() => {
    dispatch(fetchFirebaseData());
  }, [dispatch]);

  const handleAddData = () => {
    if (message.trim() === "") return;
    const newData = { name: "Usuario", value: message };
    dispatch(addDataToFirebase(newData));
    setMessage(""); // Limpiar input
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleAddData();
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Chat con Firebase
      </h2>

      <div className="h-64 overflow-y-auto mb-4 space-y-2">
        {loading ? (
          <p className="text-center text-blue-600 font-medium">Cargando...</p>
        ) : (
          data.map((item, index) => (
            <div
              key={index}
              className="p-3 border border-gray-200 rounded-lg bg-gray-100 text-gray-800"
            >
              <span className="font-semibold">{item.name}:</span> {item.value}
            </div>
          ))
        )}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Escribe un mensaje..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          onClick={handleAddData}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};
