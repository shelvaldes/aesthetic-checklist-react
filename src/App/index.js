import React from 'react';
import './App.css';
import './assets/fonts.css'
import './assets/header.css'

import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'Dar amor al gatito', completed: true },
//   { text: 'Aplicar a vacantes', completed: false },
//   { text: 'Mejorar la accesibilidad de la aplicación', completed: false },
//   { text: 'Conseguir novio', completed: false },
//   { text: 'Estudiar React', completed: false },
//   { text: 'Usar estados derivados en React. Este sería el ejemplo de un texto largo.', completed: true },
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

// localStorage.removeItem('TODOS_V1');

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  )

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };


  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  // Alternativa con filter
  // const deleteTodo = (text) => {
  //   const newTodos = todos.filter((todo) => todo.text != text);
  //   setTodos(newTodos);
  // };

  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
