import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavoriteMovie } from '../store/reducers';
import Navbar from './Navbar';
function FavoriteMovies() {
  const favoriteMovies = useSelector(state => state.movie.favoriteMovies);
const dispatch=useDispatch();

const handleRemoveFavorite=(movie)=>{
  dispatch(removeFavoriteMovie(movie));
}
  return (
    <div>
      <Navbar/>
      <h2>Favori Filmler</h2>
      {favoriteMovies==''? <h2>Listeniz Boş</h2> : (
 <div className='movies-list'>
 {favoriteMovies.map(movie => (
   <div className='movie-card' key={movie.imdbID}>
     
   <div> <img src={movie.Poster}/></div>
   <h3>{movie.Title}</h3>
   <button onClick={()=>handleRemoveFavorite(movie)}>Favorilerden Çıkar</button>
   </div>
  
 ))}
</div>
      )}
     


    </div>
  );
}

export default FavoriteMovies;
