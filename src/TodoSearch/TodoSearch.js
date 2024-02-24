import React from 'react';
import './TodoSearch.css'
import { ReactComponent as SearchIcon } from './ico-search.svg'

function TodoSearch({
  searchValue,
  setSearchValue,
}) {

  return (
    <div className='search-container'>
      <SearchIcon className='search-icon' />
      <input
        className='search-input'
        placeholder="Búsqueda"
        aria-label="Búsqueda"
        value={searchValue}
        onChange={(event)=> {
          setSearchValue(event.target.value);
        }}
      />

    </div>
  )
}

export { TodoSearch };