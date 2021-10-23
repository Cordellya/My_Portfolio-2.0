import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { useEffect } from "react-dom";
// import locomotiveScroll from "locomotive-scroll";

import "./App.scss";
import Home from "./components/HomePage/Home";
import About from "./components/About/About";
// import useLocoScroll from "./hooks/UseLocoScroll";

function App() {
  // useLocoScroll();
  return (
    <Router>
      <div className="container" id="main-container">
        <div className="scroll">
          <div className="home">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/About" component={About} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
