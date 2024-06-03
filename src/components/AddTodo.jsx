import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { TodoContext } from '../context/TodoContext';

const AddTodo = () => {
    const { addTodo } = useContext(TodoContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() === '') {
            alert("Title Can't be Blank!!");
            return;
        }

        addTodo(title, description);
        setTitle('');
        setDescription('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <div>
                <Input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={handleChangeTitle}
                />
                <TextArea
                    placeholder="Description"
                    value={description}
                    onChange={handleChangeDescription}
                />
            </div>
            <Button type="submit">Add Todo</Button>
        </Form>
    );
};

export default AddTodo;



const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const TextArea = styled.input`
    border: none;
    padding: 10px;
    border-radius: 5px;
    width: 100%;
    margin: 10px 0;
    max-width: 300px;
    `;

const Input = styled.input`
    border: none;
    padding: 10px;
    border-radius: 5px;
    width: 100%;
    margin: 10px 0;
    max-width: 300px;
    `;

const Button = styled.button`
    background-color: #7066fd;
    color: #fff;
    padding: 5px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
`;
