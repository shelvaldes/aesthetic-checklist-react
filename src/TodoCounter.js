function TodoCounter({total, completed}) {
    return (
      <h2>
        {completed}/{total} tareas completadas
      </h2>
    )
  }

  export { TodoCounter };