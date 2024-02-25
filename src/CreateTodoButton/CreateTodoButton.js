import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './CreateTodoButton.css'

function CreateTodoButton() {
  const {
    setOpenModal,
  } = React.useContext(TodoContext);

    return (
      <button 
      className='btn-add'
      onClick={ 
        () => setOpenModal(true)
      }
      />
    )
  }

  export { CreateTodoButton };