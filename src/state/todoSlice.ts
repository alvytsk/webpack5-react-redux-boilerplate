import { createSlice } from '@reduxjs/toolkit';

export type TodoItem = {
  id: number;
  title: string;
  completed: boolean;
};

const initialState: TodoItem[] = [
  { id: 0, title: 'Drink coffee', completed: true },
  { id: 1, title: 'Todo list coding', completed: false },
  { id: 2, title: 'Check mail', completed: false }
];

const getIndex = (id: number, arr: TodoItem[]) => {
  return arr.findIndex((item) => item.id === id);
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newItem: TodoItem = {
        id: state.length ? state[state.length - 1].id + 1 : 0,
        title: action.payload.title,
        completed: false
      };
      state.push(newItem);
    },
    deleteTodo: (state, action) => {
      state.splice(getIndex(action.payload.id, state), 1);
    },
    editTodo: (state, action) => {
      state[getIndex(action.payload.id, state)].title = action.payload.title;
    },
    setCompleted: (state, action) => {
      state[getIndex(action.payload.id, state)].completed = action.payload.completed;
    }
  }
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, editTodo, setCompleted } = todoSlice.actions;

export default todoSlice.reducer;
