import React, { useEffect, useState } from 'react';
import { DoubleLinkedList } from '../Models/DoubleLinkedList';

export const DoubleLinkedListPage = () => {
  const pages = new DoubleLinkedList();
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(null);

  // Llenar la lista con datos simulados
  useEffect(() => {
    const mockedPages = [
      'Page 1',
      'Page 2',
      'Page 3',
      'Page 4',
      'Page 5'
    ];

    mockedPages.forEach(page => pages.append(page));
    pages.print(); // Imprimir la lista de páginas en la consola
    setCurrentPage(pages.peek(0)); // Establecer la primera página como la actual
  }, []);

  const handleNext = () => {
    if (currentPageIndex < pages.size() - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
      setCurrentPage(pages.peek(currentPageIndex + 1));
    }
  };

  const handlePrevious = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
      setCurrentPage(pages.peek(currentPageIndex - 1));
    }
  };

  return (
    <>
      <h1>Double Linked List Page</h1>
      <div>
        <h2>Current Page: {currentPage ? currentPage.value : 'No page selected'}</h2>
        <button onClick={handlePrevious} disabled={currentPageIndex === 0}>Previous</button>
        <button onClick={handleNext} disabled={currentPageIndex === pages.size() - 1}>Next</button>
      </div>
    </>
  );
};