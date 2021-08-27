import React from "react";
import "./App.css";
import Home from "./components/Home";
import Alias from "./components/Alias";
import Planets from "./components/Planet";
import People from "./components/People";
import Quiz from "./components/Quiz";
// import PeopleCards from "./components/PeopleCards";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/auth/Login";

function App() {
  return (
    <div className="App container">
      <div className="row">
        <Home />
        <Alias />
        <Planets />
        <People />
        {/* <PeopleCards /> */}
        <Quiz />
        <Login />
      </div>
    </div>
  );
}

export default App;
