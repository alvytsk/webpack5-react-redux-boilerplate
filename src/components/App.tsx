import React from 'react';
import './app.scss';
import TodoAddForm from './TodoAddForm';
import TodoList from './TodoList';

const App = () => {
  return (
    <section className="container">
      <div className="app-wrapper">
        <TodoAddForm />
        <TodoList />
      </div>
    </section>
  );
};

export default App;
