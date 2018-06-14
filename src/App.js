import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Work from "./components/pages/Work";

const App = () => (
  <Router>
    <div>
      {/* <NavTabs /> */}
      <Route exact path="/work" component={Work} />
      <Route exact path="/about" component={About} />
      <Route path="/" component={Home} />
    </div>
  </Router>
);

export default App;
