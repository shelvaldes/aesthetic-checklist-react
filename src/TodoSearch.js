import './css/TodoSearch.css'
import { ReactComponent as SearchIcon } from './assets/icons/ico-search.svg'

function TodoSearch() {
    return (
      <div className='search-container'>
        <SearchIcon className='search-icon'/>
        <input className='search-input' placeholder ="Búsqueda"/>
        
      </div>
    )
  }

  export { TodoSearch };