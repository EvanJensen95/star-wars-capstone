import React from "react";
import "./App.css";
import { EasybaseProvider, useEasybase } from "easybase-react";
// import { HashRouter as Router, Switch, Route } from "react-router-dom";
import ebconfig from "./ebconfig";
import Home from "./components/Home";
import Alias from "./components/Alias";
import Planets from "./components/Planet";
import People from "./components/People";
import Quiz from "./components/Quiz";
// import PeopleCards from "./components/PeopleCards";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/auth/Login";
// import Switch from "react-bootstrap/esm/Switch";
// import { Route } from "react-router";

function Account() {
  const { isUserSignedIn, signOut, userID } = useEasybase();

  return isUserSignedIn() ? (
    <div className="App container">
      <div className="row">
        <div>
          <h6 className="UserID">Current User: {userID()}</h6>
          <button className="signOutBtn" onClick={signOut}>
            Sign Out
          </button>
        </div>
        <Home />
        <Alias />
        <Planets />
        <People />
        {/* <PeopleCards /> */}
        <Quiz />
      </div>
    </div>
  ) : (
    <Login />
  );
}

function App() {
  return (
    <EasybaseProvider ebconfig={ebconfig}>
      <Account />
    </EasybaseProvider>
  );
}

export default App;
