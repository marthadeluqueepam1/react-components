import React from 'react';

type GenreSelectProps = {
  genres: string[];
  onSelect: (genre: string) => void;
};

const GenreSelect = ({ genres, onSelect }: GenreSelectProps) => {
  return (
    <div>
      {genres.map((genre) => (
        <button key={genre} onClick={() => onSelect(genre)}>
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreSelect;