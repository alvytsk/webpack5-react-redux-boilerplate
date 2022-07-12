import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { fetchTodos } from '~/state/todoSlice';
import Spinner from './Spinner/Spinner';
import { useAppDispatch, useAppSelector } from '~/hooks/state';

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchTodos());
    }, 1500);
  }, [dispatch]);

  return (
    <div className="todo-list">
      {todos.loading && (
        <div className="spinner-wrapper">
          <Spinner />
        </div>
      )}
      {todos.data.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default TodoList;
