import React from 'react';
import MovieCard from './MovieCard';

function Movies({movies}) {

  return (
    <div className='movies-container'>
      <h1>Movies</h1>
      <div className='movie-list'>
        {movies.map((movie, idx) => {
          return <MovieCard key={idx}
                  movie={movie}
          />
        })}
      </div>
    </div>
  )
}

export default Movies