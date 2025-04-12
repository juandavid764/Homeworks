import React, { useState, useEffect } from "react";
import { useCollection } from "../hooks/useCollection";

export const Crud = () => {
  const [user, setUser] = useState({ name: "" });
  const [editingId, setEditingId] = useState(null); // Track the ID of the user being edited
  const { add, getAll, isPending, results, deleteDoc, update } =
    useCollection("users");

  const getAllDocs = async () => {
    await getAll([]);
  };

  const save = async () => {
    if (editingId) {
      // Update the user if editing
      await update(editingId, user);
      setEditingId(null);
    } else {
      // Add a new user
      await add(user);
    }
    setUser({ name: "" }); // Reset the input field
    await getAllDocs();
  };

  const handleSetUser = (event) => {
    setUser({ name: event.target.value });
  };

  const handleEdit = (id, name) => {
    setEditingId(id); // Set the ID of the user being edited
    setUser({ name }); // Populate the input field with the user's name
  };

  const handleDelete = async (id) => {
    await deleteDoc(id); // Delete the user
    await getAllDocs(); // Refresh the list
  };

  useEffect(() => {
    getAllDocs();
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        CRUD de Usuarios
      </h2>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          onChange={handleSetUser}
          value={user.name}
          placeholder="Nombre"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="button"
          onClick={save}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          {editingId ? "Actualizar" : "Guardar"}
        </button>

        {isPending && (
          <span className="text-sm text-gray-500 italic">Guardando...</span>
        )}

        <ul className="mt-4 space-y-2">
          {results.map((item) => (
            <li
              key={item.id}
              className="bg-gray-100 px-4 py-2 rounded-md shadow-sm text-sm text-gray-800 flex justify-between items-center"
            >
              <span>{item.name}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(item.id, item.name)}
                  className="text-blue-600 hover:underline"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
