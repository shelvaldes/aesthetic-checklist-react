import React from 'react';
import './css/TodoSearch.css'
import { ReactComponent as SearchIcon } from './assets/icons/ico-search.svg'

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
        value={searchValue}
        onChange={(event)=> {
          setSearchValue(event.target.value);
        }}
      />

    </div>
  )
}

export { TodoSearch };