import React from "react";
import "./App.less";
import logo from '../assets/react-redux.png';
import Counter from './Counter';
import { Provider } from 'react-redux';
import store from '../redux/';

const App = () => {
  return (
    <Provider store={store}>
    <div className='app'>
      Welcome to Electron-React-Redux Boilerplate!
      <p/>
      <img src={logo} height={200}/>
      <p/>
      <Counter />
    </div>
    </Provider>
  );
};

export default App;
