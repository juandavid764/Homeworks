import { useState } from "react";

const categoriesDefault = [
  "First category",
  "Second category",
  "Third category",
];

export const ComponentApp = () => {
  const [categories, setCategories] = useState(categoriesDefault);
  const [newCategory, setNewCategory] = useState("");

  const onchange = (e) => {
    e.preventDefault();
    setNewCategory(e.target.value);
  };

  const onclick = () => {
    setCategories([...categories, newCategory]);
    setNewCategory("");
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">GifExpert</h1>
      <ol className="list-decimal list-inside mb-4">
        {categories.map((category, key) => (
          <li key={key} className="mb-2">
            {category}
          </li>
        ))}
      </ol>
      <input
        value={newCategory}
        type="text"
        onChange={onchange}
        className="bg-gray-800 text-white p-2 rounded mb-4 w-full"
        placeholder="Add a new category"
      />
      <button
        onClick={onclick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add
      </button>
    </div>
  );
};
