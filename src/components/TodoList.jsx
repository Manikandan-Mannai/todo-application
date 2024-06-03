import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import Todo from './Todo';

const TodoList = () => {
  const { todos, deleteTodo, toggleTodo } = useContext(TodoContext);

  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          description={todo.description}
          completed={todo.completed}
          onDelete={() => deleteTodo(todo.id)}
          onToggle={() => toggleTodo(todo.id)}
        />
      ))}
    </div>
  );
};

export default TodoList;
