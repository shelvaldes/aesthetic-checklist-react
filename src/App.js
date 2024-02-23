import './css/App.css';
import './css/fonts.css'
import './css/header.css'
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Dar amor al gatito', completed: true },
  { text: 'Aplicar a vacantes', completed: false },
  { text: 'Estudiar React', completed: false },
]

function App() {
  return (
    <div className="App">
      <div className='main'>

        <div className="header-container">
          <div className='header-subcontainer'>
            <h1>Pendientes</h1>
            <CreateTodoButton />
          </div>
          <TodoCounter />
        </div>

        <TodoSearch />

        <TodoList>
          {defaultTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
            />
          ))}

        </TodoList>

      </div>
    </div>
  );
}

export default App;
