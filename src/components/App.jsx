import React from "react";
import "./App.less";
import logo from '../assets/react-redux.png'

const App = () => {
  return (
    <div className='app'>
      Welcome to Electron-React-Redux Boilerplate!
      <p/>
      <img src={logo} height={200}/>
    </div>
  );
};

export default App;
