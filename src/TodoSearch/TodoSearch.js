import React from 'react';
import './TodoSearch.css'
import { ReactComponent as SearchIcon } from './ico-search.svg'
import { TodoContext } from '../TodoContext/TodoContext';

function TodoSearch() {
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

  return (
    <div className='search-container'>

      <SearchIcon className='search-icon' />
      <input
        className='search-input'
        placeholder="Búsqueda"
        aria-label="Búsqueda"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />

    </div>
  )
}

export { TodoSearch };