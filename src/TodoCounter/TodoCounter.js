import './TodoCounter.css'

function TodoCounter({ total, completed }) {
  return (
    total == completed ?
      <h2>
        Todo en orden
      </h2>
      :
      <h2>
        {completed}/{total} tareas completadas
      </h2>
  )

}

export { TodoCounter };