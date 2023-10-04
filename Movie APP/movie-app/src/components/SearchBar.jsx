import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../store/reducers'; 

function SearchBar() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(state => state.movie.searchTerm);

  const handleInputChange = event => {
    const searchTerm = event.target.value;
    dispatch(setSearchTerm(searchTerm));
  };

  return (
    <input
    className='searchBar'
      type="text"
      placeholder="Film ara..."
      onChange={handleInputChange}
      value={searchTerm} 
    />
  );
}

export default SearchBar;
