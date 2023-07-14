
import './App.css';
import { useEffect } from 'react';

 // a5afc377
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=a5afc377'

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s={title}`)
    const data = await response.json();
    console.log(data.Search);
  }

  useEffect (() => {
    searchMovies('Spiderman')
  }, []);

  return (
    <div class Name="App">
      
    </div>
  );
}

export default App;
