import React, { useEffect, useState } from "react";
import { DoubleLinkedList } from "../Models/DoubleLinkedList";
import { Navbar } from "../components/Navbar";

export const NavegationPage = () => {
  const pages = new DoubleLinkedList();
  const [currentPage, setCurrentPage] = useState(null);

  // Llenar la lista con datos simulados
  useEffect(() => {
    const mockedPages = [
      "www.google.com",
      "www.facebook.com",
      "www.instagram.com",
      "www.linkedin.com",
      "www.github.com",
    ];

    mockedPages.forEach((page) => pages.append(page));

    setCurrentPage(pages.head); // Establecer la primera página como la actual
  }, []);

  const handleNext = () => {
    setCurrentPage(currentPage.next);
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage.prev);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    <Navbar />
      <h1 className="text-3xl font-bold mb-4">Double Linked List Page</h1>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2">Current Page</h2>
        <a
          href={currentPage ? `https://${currentPage.value}` : "#"}
          className="text-blue-500 underline mb-4 block"
        >
          {currentPage ? currentPage.value : "No page selected"}
        </a>
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
            disabled={!currentPage || !currentPage.prev}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
            disabled={!currentPage || !currentPage.next}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};