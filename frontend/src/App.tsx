import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <div>
        <h1>Home Page</h1>
      </div>
      {<Outlet />}
    </div>
  );
};

export default App;
