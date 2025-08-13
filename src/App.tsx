import './App.css'
import Counter from './components/Counter'
import GenreSelect from './components/GenreSelect'
import SearchForm from './components/SearchForm'
import MovieTile from './components/MovieTile'
import MovieDetails from './components/MovieDetails'
import { genres } from "./components/Interfaces"
import { movies } from "./components/Interfaces"
import { type Movie} from './components/Interfaces'
import { useState } from 'react'

function App() {
  const [movieDetailsVisible, setMovieDetailsVisible] = useState(false);

  const handleMovieClick = () => {
    console.log('Movie tile clicked!');
    setMovieDetailsVisible(true);
  };

  const handleCloseDetails = () => {
    setMovieDetailsVisible(false); // Hide popup
  };

  const handleEdit = () => {
    console.log('Edit button clicked!');
  };

  // const handleDelete = () => {
  //   console.log('Delete button clicked!');
  // };

  return (
    <>
    <Counter />
    <SearchForm initialQuery="" onSearch={(query) => console.log("Search:", query)}/>
    <GenreSelect genres={genres} onSelect={(selected) => console.log("Selected genre:", selected)}/>
    {movies.map((movie: Movie) => {
      <>
        <MovieTile
          key={movie.id}
          imageUrl={movie.imageUrl}
          movieName={movie.movieName}
          releaseYear={movie.releaseYear}
          genres={movie.genres}
          onClick={handleMovieClick}
          onEdit={handleEdit}
          onDelete={() => console.log('Delete button clicked!')} />
        <MovieDetails
          movie={movie}
          visible={movieDetailsVisible}
          onClose={handleCloseDetails} />
      </>
    })}
    </>
  )
}

export default App
