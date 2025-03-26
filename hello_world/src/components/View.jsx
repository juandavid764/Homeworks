import { PersonCard } from "./PersonCard";

export const View = ({ people }) => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen  p-4 h-full">
      <h1 className="text-3xl font-bold mb-4">View</h1>
      <div className="flex flex-col w-full h-1/2 overflow-y-auto">
        {people.size() ? (
          people.items.map((person, index) => (
            <PersonCard key={index} person={person} />
          ))
        ) : (
          <p>No people</p>
        )}
      </div>
    </div>
  );
};
