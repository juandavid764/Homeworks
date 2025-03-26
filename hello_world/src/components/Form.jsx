import { useState } from "react";

export const Form = ({ people, setReLoad }) => {
  const [formData, setFormData] = useState({
    name: "",
    withdrawalAmount: 0,
  });

  const handleChange = (e) => {
    const key = e.target.name;

    setFormData({
      ...formData,
      [key]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReLoad((prev) => !prev);

    people.enqueue(formData);
    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-2xl bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Form</h1>
      <form
        className="flex flex-col w-1/3 bg-white p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="text-gray-700 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <label htmlFor="withdrawalAmount" className="text-gray-700 mb-2">
          withdrawal Amount
        </label>
        <input
          type="number"
          id="withdrawalAmount"
          name="withdrawalAmount"
          value={formData.withdrawalAmount}
          onChange={handleChange}
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-gray-800 text-white font-bold  p-2 rounded hover:bg-gray-700"
        >
          Add
        </button>
      </form>
    </div>
  );
};
