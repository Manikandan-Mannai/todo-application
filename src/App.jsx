import React from 'react';
import { TodoProvider } from './context/TodoContext';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

const App = () => {
  return (
    <TodoProvider>
      <div className="app">
        <AddTodo />
        <TodoList />
      </div>
        <Footer/>
    </TodoProvider>
  );
};

export default App;
