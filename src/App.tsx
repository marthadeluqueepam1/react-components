import './App.css'
import Counter from './components/Counter'
import GenreSelect from './components/GenreSelect'
import SearchForm from './components/SearchForm'
import MovieTile from './components/MovieTile'

function App() {
  const handleMovieClick = (movieName: string) => {
    console.log('Movie tile clicked!' + movieName);
  };

  const handleEdit = () => {
    console.log('Edit button clicked!');
  };

  // const handleDelete = () => {
  //   console.log('Delete button clicked!');
  // };

  interface MovieTile {
    id: number;
    imageUrl: string;
    movieName: string;
    releaseYear: number;
    genres: string[]
  }

  const movies: MovieTile[] =[
    { 
      id: 1,
      imageUrl: "imageUrl",
      movieName: "Inception",
      releaseYear: 2010,
      genres: ['Sci-Fi', 'Thriller'],
    },
    { 
      id: 2,
      imageUrl: "imageUrl",
      movieName: "Inception2",
      releaseYear: 2011,
      genres: ['Sci-Fi', 'Thriller']
    }
  ]

  const genres: string[] = [
    'All', 'Documentary', 'Comedy', 'Horror', 'Crime'
  ]

  return (
    <>
    <Counter />
    <SearchForm initialQuery="" onSearch={(query) => console.log("Search:", query)}/>
    <GenreSelect genres={genres} onSelect={(selected) => console.log("Selected genre:", selected)}/>
    {movies.map((movie) => (
      <MovieTile
        key={movie.id}
        imageUrl= {movie.imageUrl}
        movieName= {movie.movieName}
        releaseYear= {movie.releaseYear}
        genres= {movie.genres}
        onClick={handleMovieClick}
        onEdit={handleEdit}
        onDelete={() => console.log('Delete button clicked!')}
      />
    ))}
    </>
  )
}

export default App
