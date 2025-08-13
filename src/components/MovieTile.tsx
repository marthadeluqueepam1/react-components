import { useState } from 'react';

interface MovieTileProps {
  imageUrl: string;
  movieName: string;
  releaseYear: number;
  genres: string[];
  onClick: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
};

const MovieTile = ({
  imageUrl,
  movieName,
  releaseYear,
  genres,
  onClick,
  onEdit,
  onDelete,
}: MovieTileProps) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleEdit = () => {
    if (onEdit) onEdit();
    setMenuVisible(false); // Close the menu after the action
  };

  const handleDelete = () => {
    if (onDelete) onDelete();
    setMenuVisible(false); // Close the menu after the action
  };

  return (
    <div onClick={onClick}>
      {/* Movie Poster */}
      <img src={imageUrl} alt={`${movieName} poster`}/>
      <h3>{movieName}</h3>
      <p>{releaseYear}</p>
      <p>{genres.join(', ')}</p>

      {/* Context Menu */}
      <div>
        {/* Three Dots Button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            toggleMenu();
          }}
        >
          &#x22EE; {/* Unicode for three vertical dots */}
        </button>

        {/* Menu */}
        {menuVisible && (
          <div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleEdit();
              }}
            >
              Edit
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDelete();
              }}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieTile;