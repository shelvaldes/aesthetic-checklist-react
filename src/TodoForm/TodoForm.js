
import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext/TodoContext';

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form 
            className='TodoForm'
            onSubmit={onSubmit}
        >
        <textarea
            placeholder='¿Qué necesitas hacer hoy?'
            value={newTodoValue}
            onChange={onChange}
            required
        />
        <button 
            className="button-primary"
            type='submit'
        >
            Guardar
        </button>
    </form>
    );

}

export { TodoForm };

