import React from "react";
import "./App.less";
import logo from '../assets/react-redux.png';
import Counter from './Counter';

const App = () => {
  return (
    <div className='app'>
      Welcome to Electron-React-Redux Boilerplate!
      <p/>
      <img src={logo} height={200}/>
      <p/>
      <Counter />
    </div>
  );
};

export default App;
