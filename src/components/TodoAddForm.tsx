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

  return (
    <div>
      <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      <button onClick={onAddTodo}>Add</button>
    </div>
  );
};

export default TodoAddForm;
