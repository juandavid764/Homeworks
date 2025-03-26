import React, { useState, useEffect } from "react";

import { Queue } from "../Models/Queue.js";
import { PeopleDefault } from "../utils/DefaultPeople.js";

import { Form } from "../components/Form.jsx";
import { View } from "../components/View.jsx";

export const HomePage = () => {
  const [people, setPeople] = useState(new Queue());
  const [reLoad, setReLoad] = useState(false);
  console.log("Data people from HomePage", people.items);

  useEffect(() => {
    PeopleDefault.forEach((book) => {
      people.enqueue(book);
    });

    setReLoad(!reLoad);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <div className="flex ">
        <Form people={people} setReLoad={setReLoad} />
        <View people={people} />
      </div>
    </div>
  );
};
