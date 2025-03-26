import React from 'react';
//import personCover from '../assets/person_cover.svg';

export const PersonCard = ({ person }) => {
  return (
    <div className="flex flex-col border p-4 mb-4 bg-white shadow-md rounded-lg">
      {/* <img src={personCover} alt="person Cover" className="w-32 h-48 mb-4" /> */}
      <p className="text-xl font-bold text-gray-800">{person.name}</p>
      <p className="text-lg text-gray-600">{person.withdrawalAmount}</p>
    </div>
  );
};