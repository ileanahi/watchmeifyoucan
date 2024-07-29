import React from 'react'

function MovieForm({addMovie}) {

  const handleForm = (e) => {
    e.preventDefault();

    const newMovie = {
      title: e.target.title.value,
      poster_path: e.target.poster.value,
      release_date: e.target.release_date.value,
      overview: e.target.overview.value
    }

    addMovie(newMovie);
  }

  return (
    <div>
      <h1>Add a movie</h1>
      <form className='movie-form' onSubmit={handleForm}>
        <label htmlFor="title">Title</label>
        <input name="title" type="text" id="title" />
        <label htmlFor="release_date">Release Date</label>
        <input name="release_date" type="text" id="release_date" />
        <label htmlFor="overview">Overview</label>
        <input name="overview" type="text" id="overview" />
        <label htmlFor="poster">Poster</label>
        <input name="poster" type="text" id="poster" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default MovieForm