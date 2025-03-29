import { NumberCard } from "./NumberCard";

export const View = ({ numbers }) => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen  p-4 h-full">
      <h1 className="text-3xl font-bold mb-4">View</h1>
      <div className="flex flex-col w-full h-1/2 overflow-y-auto">
        {numbers.size() ? (
          numbers.items.slice().reverse().map((number, index) => (
            <NumberCard key={index} number={number} />
          ))
        ) : (
          <p>No numbers</p>
        )}
      </div>
    </div>
  );
};
