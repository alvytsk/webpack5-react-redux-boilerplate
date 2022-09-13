import todoReducer, {
  addTodo,
  deleteTodo,
  editTodo,
  toggleCompleted,
  initialState,
  TodoState
} from './todoSlice';

describe('todoSlice', () => {
  it('should return default state, when passed an empty action', () => {
    const result = todoReducer(undefined, { type: '' });

    expect(result).toEqual(initialState);
  });

  it('should add new todo item with "addTodo" action', () => {
    const title = 'Test todo';

    const action = { type: addTodo.type, payload: title };
    const result = todoReducer(initialState, action);

    const item = result.data[0];

    expect(result.data.length === 1);
    expect(result.total === 1);
    expect(item.title === title);
    expect(item.completed === false);
  });

  it('should toggle todo completed status with "setCompleted" action', () => {
    const todos: TodoState = {
      data: [{ id: 0, title: 'Some title', completed: false }],
      total: 1,
      loading: false,
      completed: 0
    };

    const action = { type: toggleCompleted.type, payload: { id: 0, completed: true } };
    const result = todoReducer(todos, action);

    const item = result.data[0];

    expect(item.completed === true);
    expect(result.completed === 1);
  });

  it('should remove item with "deleteTodo" action', () => {
    const todos: TodoState = {
      data: [{ id: 0, title: 'Some title', completed: false }],
      total: 1,
      loading: false,
      completed: 0
    };

    const action = { type: deleteTodo.type, payload: { id: 0 } };
    const result = todoReducer(todos, action);

    expect(result.data.length === 0);
    expect(result.completed === 0);
    expect(result.total === 0);
  });

  it('should change item title with "editTodo" action', () => {
    const todos: TodoState = {
      data: [{ id: 0, title: 'Some title', completed: false }],
      total: 1,
      loading: false,
      completed: 0
    };

    const newTitle = 'New title';

    const action = { type: editTodo.type, payload: { id: 0, title: newTitle } };
    const result = todoReducer(todos, action);

    const item = result.data[0];

    expect(item.title === newTitle);
  });
});
