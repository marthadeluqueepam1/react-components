import './App.css'
import { useState } from 'react'
import { genres } from "./components/Interfaces"
import { movies } from "./components/Interfaces"
import { type Movie} from './components/Interfaces'
import Counter from './components/Counter'
import GenreSelect from './components/GenreSelect'
import SearchForm from './components/SearchForm'
import MovieTile from './components/MovieTile'
import MovieDetails from './components/MovieDetails'
import SortControl from './components/SortControl'
import Dialog from './components/Dialog'

function App() {
  const [movieDetailsVisible, setMovieDetailsVisible] = useState(false);
  const [sortBy, setSortBy] = useState("Release Date");
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);

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
  const handleSortChange = (newValue: string) => {
    console.log("Sort by:", newValue);
    setSortBy(newValue);
  };

  return (
    <>
      <Counter />
      <SearchForm initialQuery="" onSearch={(query) => console.log("Search:", query)} />
      <GenreSelect genres={genres} onSelect={(selected) => console.log("Selected genre:", selected)} />
      <div>
        <h1>Movie List</h1>
        <SortControl currentSelection={sortBy} onChange={handleSortChange} />
        <p>Currently sorting by: {sortBy}</p>
      </div>
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
      <h1>React Dialog Example</h1>
      <button onClick={handleOpenDialog}>Open Dialog</button>
      <Dialog
          title="Modal Title"
          isOpen={dialogOpen}
          onClose={handleCloseDialog}
      >
        <div>
          <p>This is the body content of the modal dialog.</p>
          <button onClick={handleCloseDialog}>Close</button>
        </div>
      </Dialog>
    </>
  )
}

export default App
