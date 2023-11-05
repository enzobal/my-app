import React from 'react';

const MovieCard = ({ movie }) => {
  // Calcular el color del metascore
  let metascoreColor = 'green';
  if (movie.metascore >= 0 && movie.metascore < 50) {
    metascoreColor = 'red';
  } else if (movie.metascore >= 50 && movie.metascore < 60) {
    metascoreColor = 'yellow';
  }

  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>Year: {movie.releaseDate}</p>
      <p>Duration: {movie.duration}</p>
      <p>Maturity: {movie.maturity}</p>
      <p>Genres: {movie.genres.join(', ')}</p>
      <p>Rating: {movie.rating}</p>
      <p>
        Metascore: <span style={{ color: metascoreColor }}>{movie.metascore}</span>
      </p>
      <p>Director: {movie.director}</p>
      <p>Main Actors: {movie.mainActors.join(', ')}</p>
      <p>Description: {movie.plot}</p>
    </div>
  );
};

export default MovieCard;
