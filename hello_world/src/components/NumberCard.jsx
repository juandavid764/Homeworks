import React from 'react';

export const NumberCard = ({ number }) => {
  return (
    <div className="flex flex-col border p-4 mb-4 bg-white shadow-md rounded-lg">
      <p className="text-xl font-bold text-gray-800">{number}</p>
    </div>
  );
};