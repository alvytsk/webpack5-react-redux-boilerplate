import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '~/state';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <div className="todo-list">
      {todos.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default TodoList;
