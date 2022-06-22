import React from "react";
import "./app.scss";
import Counter from "./Counter";

const App = () => {
  return (
    <section className="container">
      <div className="app-wrapper">
          <div className="title">
            Welcome to Webpack5 React Redux Boilerplate!
          </div>
          <img src="assets/react-redux.png" className="logo" />
          <Counter />
      </div>
    </section>
  );
};

export default App;
