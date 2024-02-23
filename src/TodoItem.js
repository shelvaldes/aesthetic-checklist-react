function TodoItem(props) {
    return (
      <li className="todo-item unchecked">
        <p>{props.text}</p>
        <button className="btn-delete"></button>
      </li>
    )
  }

  export { TodoItem };