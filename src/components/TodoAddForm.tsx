import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '~/state/todoSlice';

const TodoAddForm = () => {
  const [title, setTitle] = useState<string>('');
  const dispatch = useDispatch();

  const onAddTodo = () => {
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
        onChange={(event) => setTitle(event.target.value)}
      />
      <button onClick={onAddTodo}>Add</button>
    </div>
  );
};

export default TodoAddForm;
