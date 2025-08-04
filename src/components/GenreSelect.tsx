import React from 'react';

type GenreSelectProps = {
  genres: string[];
  selectedGenre: string;
  onSelect: (genre: string) => void;
};

const GenreSelect = ({ genres, selectedGenre, onSelect }: GenreSelectProps) => {
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