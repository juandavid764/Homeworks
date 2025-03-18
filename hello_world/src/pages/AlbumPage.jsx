import React, { useEffect, useState } from 'react';
import { LinkedList } from '../Models/LinkedList';
import { Navbar } from '../components/Navbar';

export const AlbumPage = () => {
  const songs = new LinkedList();
  const [currentSong, setCurrentSong] = useState(null);

  // Llenar la lista con datos simulados
  useEffect(() => {
    const mockedSongs = [
      'Song 1',
      'Song 2',
      'Song 3',
      'Song 4',
      'Song 5'
    ];

    mockedSongs.forEach(song => songs.append(song));

    setCurrentSong(songs.head); // Establecer la primera canción como la actual
  }, []);

  const handleNext = () => {
    setCurrentSong(currentSong.next);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    <Navbar />
      <h1 className="text-3xl font-bold mb-4">Album Page</h1>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2">Current Song</h2>
        <p className="text-gray-700 mb-4">
          {currentSong ? currentSong.value : 'No song data'}
        </p>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={!currentSong || !currentSong.next}
        >
          Next
        </button>
      </div>
    </div>
  );
};