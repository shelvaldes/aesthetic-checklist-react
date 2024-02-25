import React, { useContext } from 'react'; // Importa useContext
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoList/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoForm } from '../TodoForm/TodoForm';

import { Modal } from '../Modal/Modal';

import { TodosLoading } from '../TodosLoading/TodosLoading';
import { TodosError } from '../EmptyAndError/TodosError';
import { EmptyTodos } from '../EmptyAndError/EmptyTodos';

import { TodoContext } from '../TodoContext/TodoContext';

function AppUI() {
    // Usa useContext para acceder a los valores del contexto
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
    } = useContext(TodoContext);

    if (loading) {
        return (
            <div className="App">
                <div className='main'>
                    <TodosLoading /> {/* Esqueleto */}
                </div>
            </div>
        );
    }

    return (
        <div className="App">
            <div className='main'>
                <div className="header-container">
                    <div className='header-subcontainer'>
                        <h1>Tareas</h1>
                        <CreateTodoButton />
                    </div>
                    <TodoCounter />
                </div>

                <TodoSearch />

                <TodoList>
                    {error && <TodosError />}
                    {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

                    {searchedTodos.map(todo => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    ))}
                </TodoList>

                {openModal && (
                    <Modal>
                       <TodoForm/>
                    </Modal>
                )}

            </div>
        </div>
    );
}

export { AppUI };
