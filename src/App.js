import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Project from "./components/Project";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutMe} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/projects" component={Project} />
        <Route exact path="/contact" component={ContactMe} />
      </Router>
    </Fragment>
  );
}

export default App;
