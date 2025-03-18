import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <Navbar />
    </div>
  );
};
