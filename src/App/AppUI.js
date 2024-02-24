import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoList/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';

import { TodosLoading } from '../TodosLoading/TodosLoading';
import { TodosError } from '../EmptyAndError/TodosError';
import { EmptyTodos } from '../EmptyAndError/EmptyTodos';

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}) {
    if (loading) {
        return (
            <div className="App">
                <div className='main'>
                    <TodosLoading /> {/* Muestra el esqueleto aquí */}
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
                    <TodoCounter
                        completed={completedTodos}
                        total={totalTodos}
                    />
                </div>

                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />

                <TodoList>
                    {/* {loading && <TodosLoading />} */}
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

            </div>
        </div>
    );
}

export { AppUI };