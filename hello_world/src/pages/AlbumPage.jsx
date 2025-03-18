import React, { useEffect, useState } from 'react';
import { LinkedList } from '../Models/LinkedList';

export const AlbumPage = () => {
  const songs = new LinkedList();
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
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
    songs.print(); // Imprimir la lista de canciones en la consola
    setCurrentSong(songs.head); // Establecer la primera canción como la actual
  }, []);

  const handleNext = () => {
    if (currentSongIndex < songs.size() - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
      setCurrentSong(songs.peek(currentSongIndex + 1));
    }
  };

  const handlePrevious = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
      setCurrentSong(songs.peek(currentSongIndex - 1));
    }
  };

  return (
    <>
      <h1>Album Page</h1>
      <div>
        <h2>Current Song: {currentSong ? currentSong.value : 'No song selected'}</h2>
        <button onClick={handlePrevious} disabled={currentSongIndex === 0}>Previous</button>
        <button onClick={handleNext} disabled={currentSongIndex === songs.size() - 1}>Next</button>
      </div>
    </>
  );
};