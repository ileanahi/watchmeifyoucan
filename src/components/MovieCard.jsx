import React from 'react'

function MovieCard({movie}) {
  return (
    <div className="movie-card">
      <img src={movie.poster_path} alt={movie.title}/>
      <h2>{movie.title}</h2>
      <p>{movie.release_date}</p>
      <p>{movie.overview}</p>
    </div>
  )
}

export default MovieCard