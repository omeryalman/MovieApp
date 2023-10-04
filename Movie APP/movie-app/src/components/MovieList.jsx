import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMovies, addFavoriteMovie } from '../store/reducers/';
import FavoriteMovies from './FavoriteMovies';

function MovieList() {
  const movies = useSelector(state => state.movie.movies) || [];
  const searchTerm = useSelector(state => state.movie.searchTerm);
  const favoriteMovies=useSelector(state=>state.movie.favoriteMovies)
  const dispatch = useDispatch();


  const handleAddFavorite = (movie) => {
    const isAlreadyAdded=favoriteMovies.some(favoriteMovies=>favoriteMovies.imdbID===movie.imdbID);
    if(!isAlreadyAdded){
    dispatch(addFavoriteMovie(movie));
    }
  };

  
  const [hoveredMovie, setHoveredMovie] = useState(null);

  useEffect(() => {
    if (searchTerm) {
      fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=eb18f193`)
        .then(response => response.json())
        .then(data => {
          dispatch(setMovies(data.Search));
        })
        .catch(error => {
          console.error('API isteği başarısız oldu:', error);
        });
    }
  }, [searchTerm, dispatch]);

  return (
    <div className='movies-list'>
      {movies.map(movie => (
        <div
          className="movie-card"
          key={movie.imdbID}
          onMouseEnter={() => setHoveredMovie(movie)}
          onMouseLeave={() => setHoveredMovie(null)}
        >
          <img src={movie.Poster} alt={movie.Title + ' Poster'} />
          <h3>{movie.Title}</h3>
          {hoveredMovie === movie && (
            <>
              <span>Yıl: {movie.Year}</span>
              <span> Tür: {movie.Type}</span>
            </>
          )}<p></p>
          {hoveredMovie === movie && (
            
            <button onClick={() => handleAddFavorite(movie)}>Favori Ekle</button>            
          
          )

          }
        </div>
      ))}
    </div>
  );
}

export default MovieList;