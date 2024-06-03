import React from 'react';
import styled from 'styled-components';
import { RiDeleteBinLine } from 'react-icons/ri';

const Todo = ({ title, description, onDelete, onToggle, completed }) => {
  return (
    <TodoContainer>
      <div>
      <Checkbox
        type="checkbox"
        checked={completed}
        onChange={onToggle}
      />
        <Text completed={completed ? 'true' : 'false'}>
          {title}
        </Text>
        <Description><b>Description: </b>{description}</Description>
      </div>
      <DeleteButton onClick={onDelete}><RiDeleteBinLine /></DeleteButton>
    </TodoContainer>
  );
};

export default Todo;


const TodoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #f4f5f9;
  border-radius: 5px;
  margin: 10px 0px;
`;

const Checkbox = styled.input`
  margin-right: 15px;
`;

const Text = styled.span`
  flex: 1;
  text-decoration: ${({ completed }) => (completed === 'true' ? 'line-through' : 'none')};
`;

const DeleteButton = styled.button`
  border: none;
  font-size: 20px;
  border-radius: 3px;
  color: #161535;
  cursor: pointer;
`;

const Description = styled.div`
font-size: 12px;
`