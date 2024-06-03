import React, { createContext, useEffect, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    const addTodo = (title, description) => {
        const newTodo = { id: Date.now(), title, description, completed: false };
        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    const toggleTodo = (id) => {
        const newTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
    };

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <TodoContext.Provider value={{ todos, addTodo, deleteTodo, toggleTodo }}>
            {children}
        </TodoContext.Provider>
    );
};
