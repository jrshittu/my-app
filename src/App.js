
import './App.css';
import searchIcon from './search.svg';
import { useEffect, useState } from 'react';
import MovieCard from './movieCard';

 // a5afc377
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=a5afc377';
const movie1 = {
  "Title": "UFC 18: Road to the Heavyweight Title",
  "Year": "1999",
  "imdbID": "tt0483513",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZjI2N2UyMDctOTYwZi00ZjYwLWFjOTItZjIwN2Q5ZWYwYzY0XkEyXkFqcGdeQXVyMDE4MzA0NQ@@._V1_SX300.jpg"
}

const App = () => {

  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s={title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect (() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div class Name="App">
      <div className='app'>
        <h1>MovieMojo</h1>
        <div className='search'>
          <input placeholder='Search for Movies' value="Superman" onChange={ () => {}}/>
          <img src={searchIcon} alt='search' onClick={() => {}} alt='Search'/>
        </div>

        <div className='container'>
          <MovieCard movie1={movies[0]}/>
        </div>
      </div>
    </div>
  );
}

export default App;
