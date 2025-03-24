import React from 'react';
//import bookCover from '../assets/book_cover.svg';

export const BookCard = ({ book }) => {
  return (
    <div className="flex flex-col border p-4 mb-4 bg-white shadow-md rounded-lg">
      {/* <img src={bookCover} alt="Book Cover" className="w-32 h-48 mb-4" /> */}
      <p className="text-xl font-bold text-gray-800">{book.name}</p>
      <p className="text-lg text-gray-600">{book.author}</p>
      <p className="text-lg text-gray-600">{book.ISBN}</p>
      <p className="text-lg text-gray-600">{book.publisher}</p>
    </div>
  );
};