import './App.css'
import Counter from './components/Counter'
import GenreSelect from './components/GenreSelect'
import SearchForm from './components/SearchForm'

function App() {

  return (
    <>
    <Counter />
    <SearchForm initialQuery="" onSearch={(query) => console.log("Search:", query)}/>
    <GenreSelect genres={['All', 'Documentary', 'Comedy', 'Horror', 'Crime']} selectedGenre="All" onSelect={(selected) => console.log("Selected genre:", selected)}/>
    </>
  )
}

export default App
