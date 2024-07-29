import axios from 'axios';
import { useState, useEffect } from 'react'
import './App.css'
import Movies from './components/Movies';
import MovieForm from './components/MovieForm';
import Header from './components/Header';

function App() {
  const [movies, setMovies] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios.get('/api/movies')
         .then((res) => {
          setMovies(res.data)
          console.log(res);
        })
         .catch((err) => console.log(err));
  }, [])

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  }

  return (
    <>
      <Header 
        showForm={showForm}
        setShowForm={setShowForm}
      />
      {
        showForm ? <MovieForm addMovie={addMovie} /> : <Movies movies={movies} />
      }
      
    </>
  )
}

export default App
