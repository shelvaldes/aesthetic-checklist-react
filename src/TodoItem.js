function TodoItem(props) {
    return (
      <li className="todo-item checked">
        <button className="btn-check"></button>
        <p>{props.text}</p>
        <button className="btn-delete"></button>
      </li>
    )
  }

  export { TodoItem };