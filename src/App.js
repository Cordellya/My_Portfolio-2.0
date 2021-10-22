import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { useEffect } from "react-dom";
// import locomotiveScroll from "locomotive-scroll";

import "./App.scss";
import NavHeader from "./components/Navbar/Navbar";
import Home from "./components/HomePage/Home";
import MyProject from "./components/MyProject/MyProject";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
// import useLocoScroll from "./hooks/UseLocoScroll";

function App() {
  // useLocoScroll();
  return (
    <Router>
      <NavHeader />
      <div className="container" id="main-container">
        <div className="scroll">
          <div className="home">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/About" component={About} />
            </Switch>
            <MyProject />
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
