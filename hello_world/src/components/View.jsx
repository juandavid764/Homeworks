import { BookCard } from "./BookCard";

export const View = ({books}) => { 
  return (

    <div className="flex flex-col items-center justify-center min-h-screen  p-4 h-full">
      <h1 className="text-3xl font-bold mb-4">View</h1>
      <div className="flex flex-col w-full h-1/2 overflow-y-auto">
      {books.size() ? books.items.map((book, index) => (
          <BookCard key={index} book={book} />
        )) : <p>No books</p>}
      </div>
    </div>
  );
};
