import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '~/state/todoSlice';
import { useSelector } from 'react-redux';
import { RootState } from '~/state';

const TodoAddForm = () => {
  const loading = useSelector((state: RootState) => state.todos.loading);

  const [title, setTitle] = useState<string>('');
  const dispatch = useDispatch();

  const onAddTodo = () => {
    if (!title) return;

    dispatch(
      addTodo({
        title: title
      })
    );

    setTitle('');
  };

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      onAddTodo();
    }
  };

  return (
    <div className="add-todo-form">
      <input
        type="text"
        value={title}
        placeholder="Add todo"
        onKeyDown={onKeyDown}
        disabled={loading}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button onClick={onAddTodo} disabled={loading}>
        Add
      </button>
    </div>
  );
};

export default TodoAddForm;
