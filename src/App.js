import React from "react";
import "./App.css";
import Home from "./components/Home";
import Alias from "./components/Alias";
import Planets from "./components/Planet";
import People from "./components/People";
import Quiz from "./components/Quiz";

function App() {
  return (
    <div className="App">
      <Home />
      <Alias />
      <Planets />
      <People />
      <Quiz />
    </div>
  );
}

export default App;
