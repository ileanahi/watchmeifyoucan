import express from 'express';
import data from '../data/movies.json' assert { type: 'json' };
import ViteExpress from 'vite-express';

const app = express();
const port = 3000;

app.use(express.json());

const movies = data.results;

let movieId = movies.length + 1;

app.get('/api/movies', (req, res) => {
  res.status(200).send(movies);
});

app.post('/api/movies', (req, res) => {
  const newMovie = req.body;
  newMovie.id = movieId;
  movies.push(newMovie);
  movieId++;
  res.status(201).send(movies);
})

ViteExpress.listen(app, port, () =>
  console.log(`Server is listening on port ${port}...`)
);