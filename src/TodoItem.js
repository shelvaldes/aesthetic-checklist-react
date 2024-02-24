import { CompleteIcon } from './CompleteIcon';
import { UncompleteIcon } from './UncompleteIcon';
import { DeleteIcon } from './DeleteIcon';

function TodoItem(props) {
  return (
    <li className={`todo-item ${props.completed && "checked"}`}>

      {props.completed && <CompleteIcon 
        onComplete={props.onComplete}
      />}
      {!props.completed && <UncompleteIcon 
        onComplete={props.onComplete}
      />}

      <p>{props.text}</p>

      <DeleteIcon 
        onDelete={props.onDelete} 
      />

      {/* <button
        className="btn-check"
        onClick={props.onComplete}
      />
      <p>{props.text}</p>
      <button
        className="btn-delete"
        onClick={props.onDelete}
      ></button> */}

    </li>
  )

}

export { TodoItem };