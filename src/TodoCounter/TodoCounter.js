import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContext/TodoContext';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);

  return (
    totalTodos == completedTodos ?
      <h2>
        Todo en orden
      </h2>
      :
      <h2>
        {completedTodos}/{totalTodos} completadas
      </h2>
  )

}

export { TodoCounter };