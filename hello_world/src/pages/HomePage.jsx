import React, { useState, useEffect } from "react";

import { Stack } from "../Models/Stack";
import { booksDefault } from "../utils/DefaultBook.js";

import { Form } from "../components/Form.jsx";
import { View } from "../components/View.jsx";

export const HomePage = () => {
  const [books, setBooks] = useState(new Stack());
  const [reLoad, setReLoad] = useState(false);
  console.log("Data books from HomePage", books.items);

  useEffect(() => {
    booksDefault.forEach((book) => {
      books.push(book);
    });

    setReLoad(!reLoad);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <div className="flex ">
        <Form books={books} setReLoad={setReLoad} />
        <View books={books} />
      </div>
    </div>
  );
};
