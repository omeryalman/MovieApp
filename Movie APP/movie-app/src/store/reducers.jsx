import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  searchTerm: 'movie',
  favoriteMovies:[]
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    addFavoriteMovie: (state, action) => {
        state.favoriteMovies.push(action.payload);
      },
      removeFavoriteMovie:(state,action)=>{
        state.favoriteMovies=state.favoriteMovies.filter(
          movie=>movie.imdbID !==action.payload.imdbID
        );
      }
  },
});

export const { setMovies, setSearchTerm,addFavoriteMovie,removeFavoriteMovie} = movieSlice.actions;
export default movieSlice.reducer;
